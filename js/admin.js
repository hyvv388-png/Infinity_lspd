// ============================================
// Admin Dashboard JavaScript
// ============================================

// Check if user is logged in
function checkAdminSession() {
    const session = JSON.parse(localStorage.getItem('adminSession') || 'null');
    if (!session || !session.isAdmin) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Initialize admin data from localStorage
function initializeAdminData() {
    if (!localStorage.getItem('adminMembers')) {
        localStorage.setItem('adminMembers', JSON.stringify([
            { id: 1, name: 'John Smith', rank: 'Commander', badge: 1001, status: 'Active' },
            { id: 2, name: 'Sarah Johnson', rank: 'Captain', badge: 1002, status: 'Active' },
            { id: 3, name: 'Mike Davis', rank: 'Sergeant', badge: 1003, status: 'Active' },
            { id: 4, name: 'Emily Brown', rank: 'Officer', badge: 1004, status: 'Active' },
            { id: 5, name: 'James Wilson', rank: 'Officer', badge: 1005, status: 'Active' },
            { id: 6, name: 'Lisa Anderson', rank: 'Cadet', badge: 1006, status: 'Active' }
        ]));
    }

    if (!localStorage.getItem('adminRanks')) {
        localStorage.setItem('adminRanks', JSON.stringify([
            { id: 1, name: 'Cadet', level: 1, salary: 1000 },
            { id: 2, name: 'Officer', level: 2, salary: 1500 },
            { id: 3, name: 'Sergeant', level: 3, salary: 2000 },
            { id: 4, name: 'Captain', level: 4, salary: 2500 },
            { id: 5, name: 'Lieutenant', level: 5, salary: 3000 },
            { id: 6, name: 'Commander', level: 6, salary: 3500 }
        ]));
    }

    if (!localStorage.getItem('adminGunPlans')) {
        localStorage.setItem('adminGunPlans', JSON.stringify([
            { id: 1, name: 'Basic Plan', price: 5000, weapons: 'Pistol, Revolver' },
            { id: 2, name: 'Standard Plan', price: 10000, weapons: 'Pistol, Revolver, Shotgun' },
            { id: 3, name: 'Premium Plan', price: 15000, weapons: 'Pistol, Revolver, Shotgun, Rifle' }
        ]));
    }

    if (!localStorage.getItem('adminRequests')) {
        localStorage.setItem('adminRequests', JSON.stringify([
            { id: 1, name: 'Player1', email: 'player1@email.com', plan: 'Basic Plan', status: 'pending', date: new Date().toISOString() },
            { id: 2, name: 'Player2', email: 'player2@email.com', plan: 'Standard Plan', status: 'pending', date: new Date().toISOString() }
        ]));
    }
}

// Load members into table
function loadMembers() {
    const members = JSON.parse(localStorage.getItem('adminMembers') || '[]');
    const tbody = document.getElementById('membersTableBody');
    tbody.innerHTML = '';

    members.forEach(member => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${member.name}</td>
            <td>${member.rank}</td>
            <td>${member.badge}</td>
            <td><span style="color: #10B981;">${member.status}</span></td>
            <td>
                <button class="action-btn edit-btn" onclick="editMember(${member.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteMember(${member.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById('totalMembers').textContent = members.length;
}

// Load ranks into table
function loadRanks() {
    const ranks = JSON.parse(localStorage.getItem('adminRanks') || '[]');
    const tbody = document.getElementById('ranksTableBody');
    tbody.innerHTML = '';

    ranks.forEach(rank => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${rank.name}</td>
            <td>${rank.level}</td>
            <td>$${rank.salary}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editRank(${rank.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteRank(${rank.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Populate rank select in member modal
    const rankSelect = document.getElementById('memberRank');
    rankSelect.innerHTML = '<option value="">Select Rank</option>';
    ranks.forEach(rank => {
        const option = document.createElement('option');
        option.value = rank.name;
        option.textContent = rank.name;
        rankSelect.appendChild(option);
    });

    document.getElementById('totalRanks').textContent = ranks.length;
}

// Load gun plans into table
function loadGunPlans() {
    const plans = JSON.parse(localStorage.getItem('adminGunPlans') || '[]');
    const tbody = document.getElementById('gunPlansTableBody');
    tbody.innerHTML = '';

    plans.forEach(plan => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${plan.name}</td>
            <td>$${plan.price}</td>
            <td>${plan.weapons}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editGunPlan(${plan.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteGunPlan(${plan.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById('totalGunPlans').textContent = plans.length;
}

// Load gun requests
function loadRequests() {
    const requests = JSON.parse(localStorage.getItem('adminRequests') || '[]');
    const container = document.getElementById('requestsContainer');
    container.innerHTML = '';

    const pendingCount = requests.filter(r => r.status === 'pending').length;
    document.getElementById('pendingRequests').textContent = pendingCount;

    if (requests.length === 0) {
        container.innerHTML = '<p style="color: #94A3B8; text-align: center; padding: 2rem;">No requests yet</p>';
        return;
    }

    requests.forEach(request => {
        const card = document.createElement('div');
        card.className = 'request-card';
        
        let statusClass = 'status-pending';
        if (request.status === 'approved') statusClass = 'status-approved';
        if (request.status === 'rejected') statusClass = 'status-rejected';

        card.innerHTML = `
            <div class="request-header">
                <h3>${request.name}</h3>
                <span class="request-status ${statusClass}">${request.status.toUpperCase()}</span>
            </div>
            <div class="request-details">
                <p><strong>Email:</strong> ${request.email}</p>
                <p><strong>Plan:</strong> ${request.plan}</p>
                <p><strong>Date:</strong> ${new Date(request.date).toLocaleDateString()}</p>
            </div>
            ${request.status === 'pending' ? `
                <div class="request-actions">
                    <button class="btn-approve" onclick="approveRequest(${request.id})">✓ Approve</button>
                    <button class="btn-reject" onclick="rejectRequest(${request.id})">✗ Reject</button>
                </div>
            ` : ''}
        `;
        container.appendChild(card);
    });
}

// Member CRUD Operations
function openMemberModal() {
    document.getElementById('memberForm').reset();
    document.getElementById('memberModalTitle').textContent = 'Add Member';
    document.getElementById('memberModal').classList.add('show');
    window.currentEditingMemberId = null;
}

function closeMemberModal() {
    document.getElementById('memberModal').classList.remove('show');
}

function editMember(id) {
    const members = JSON.parse(localStorage.getItem('adminMembers') || '[]');
    const member = members.find(m => m.id === id);
    
    if (member) {
        document.getElementById('memberName').value = member.name;
        document.getElementById('memberRank').value = member.rank;
        document.getElementById('memberBadge').value = member.badge;
        document.getElementById('memberStatus').value = member.status;
        document.getElementById('memberModalTitle').textContent = 'Edit Member';
        document.getElementById('memberModal').classList.add('show');
        window.currentEditingMemberId = id;
    }
}

function deleteMember(id) {
    if (confirm('Are you sure you want to delete this member?')) {
        let members = JSON.parse(localStorage.getItem('adminMembers') || '[]');
        members = members.filter(m => m.id !== id);
        localStorage.setItem('adminMembers', JSON.stringify(members));
        loadMembers();
    }
}

document.getElementById('memberForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('memberName').value;
    const rank = document.getElementById('memberRank').value;
    const badge = parseInt(document.getElementById('memberBadge').value);
    const status = document.getElementById('memberStatus').value;

    let members = JSON.parse(localStorage.getItem('adminMembers') || '[]');

    if (window.currentEditingMemberId) {
        const member = members.find(m => m.id === window.currentEditingMemberId);
        if (member) {
            member.name = name;
            member.rank = rank;
            member.badge = badge;
            member.status = status;
        }
    } else {
        const newId = Math.max(...members.map(m => m.id), 0) + 1;
        members.push({ id: newId, name, rank, badge, status });
    }

    localStorage.setItem('adminMembers', JSON.stringify(members));
    loadMembers();
    closeMemberModal();
});

// Rank CRUD Operations
function openRankModal() {
    document.getElementById('rankForm').reset();
    document.getElementById('rankModalTitle').textContent = 'Add Rank';
    document.getElementById('rankModal').classList.add('show');
    window.currentEditingRankId = null;
}

function closeRankModal() {
    document.getElementById('rankModal').classList.remove('show');
}

function editRank(id) {
    const ranks = JSON.parse(localStorage.getItem('adminRanks') || '[]');
    const rank = ranks.find(r => r.id === id);
    
    if (rank) {
        document.getElementById('rankName').value = rank.name;
        document.getElementById('rankLevel').value = rank.level;
        document.getElementById('rankSalary').value = rank.salary;
        document.getElementById('rankModalTitle').textContent = 'Edit Rank';
        document.getElementById('rankModal').classList.add('show');
        window.currentEditingRankId = id;
    }
}

function deleteRank(id) {
    if (confirm('Are you sure you want to delete this rank?')) {
        let ranks = JSON.parse(localStorage.getItem('adminRanks') || '[]');
        ranks = ranks.filter(r => r.id !== id);
        localStorage.setItem('adminRanks', JSON.stringify(ranks));
        loadRanks();
    }
}

document.getElementById('rankForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('rankName').value;
    const level = parseInt(document.getElementById('rankLevel').value);
    const salary = parseInt(document.getElementById('rankSalary').value);

    let ranks = JSON.parse(localStorage.getItem('adminRanks') || '[]');

    if (window.currentEditingRankId) {
        const rank = ranks.find(r => r.id === window.currentEditingRankId);
        if (rank) {
            rank.name = name;
            rank.level = level;
            rank.salary = salary;
        }
    } else {
        const newId = Math.max(...ranks.map(r => r.id), 0) + 1;
        ranks.push({ id: newId, name, level, salary });
    }

    localStorage.setItem('adminRanks', JSON.stringify(ranks));
    loadRanks();
    closeRankModal();
});

// Gun Plan CRUD Operations
function openGunPlanModal() {
    document.getElementById('gunPlanForm').reset();
    document.getElementById('gunPlanModalTitle').textContent = 'Add Gun Plan';
    document.getElementById('gunPlanModal').classList.add('show');
    window.currentEditingGunPlanId = null;
}

function closeGunPlanModal() {
    document.getElementById('gunPlanModal').classList.remove('show');
}

function editGunPlan(id) {
    const plans = JSON.parse(localStorage.getItem('adminGunPlans') || '[]');
    const plan = plans.find(p => p.id === id);
    
    if (plan) {
        document.getElementById('gunPlanName').value = plan.name;
        document.getElementById('gunPlanPrice').value = plan.price;
        document.getElementById('gunPlanWeapons').value = plan.weapons;
        document.getElementById('gunPlanModalTitle').textContent = 'Edit Gun Plan';
        document.getElementById('gunPlanModal').classList.add('show');
        window.currentEditingGunPlanId = id;
    }
}

function deleteGunPlan(id) {
    if (confirm('Are you sure you want to delete this gun plan?')) {
        let plans = JSON.parse(localStorage.getItem('adminGunPlans') || '[]');
        plans = plans.filter(p => p.id !== id);
        localStorage.setItem('adminGunPlans', JSON.stringify(plans));
        loadGunPlans();
    }
}

document.getElementById('gunPlanForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('gunPlanName').value;
    const price = parseInt(document.getElementById('gunPlanPrice').value);
    const weapons = document.getElementById('gunPlanWeapons').value;

    let plans = JSON.parse(localStorage.getItem('adminGunPlans') || '[]');

    if (window.currentEditingGunPlanId) {
        const plan = plans.find(p => p.id === window.currentEditingGunPlanId);
        if (plan) {
            plan.name = name;
            plan.price = price;
            plan.weapons = weapons;
        }
    } else {
        const newId = Math.max(...plans.map(p => p.id), 0) + 1;
        plans.push({ id: newId, name, price, weapons });
    }

    localStorage.setItem('adminGunPlans', JSON.stringify(plans));
    loadGunPlans();
    closeGunPlanModal();
});

// Gun Request Operations
function approveRequest(id) {
    let requests = JSON.parse(localStorage.getItem('adminRequests') || '[]');
    const request = requests.find(r => r.id === id);
    if (request) {
        request.status = 'approved';
        localStorage.setItem('adminRequests', JSON.stringify(requests));
        loadRequests();
    }
}

function rejectRequest(id) {
    let requests = JSON.parse(localStorage.getItem('adminRequests') || '[]');
    const request = requests.find(r => r.id === id);
    if (request) {
        request.status = 'rejected';
        localStorage.setItem('adminRequests', JSON.stringify(requests));
        loadRequests();
    }
}

// Menu navigation
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        
        // Hide all sections
        document.querySelectorAll('.admin-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Remove active class from all menu items
        document.querySelectorAll('.menu-item').forEach(menu => {
            menu.classList.remove('active');
        });
        
        // Show selected section
        document.getElementById(section).classList.add('active');
        this.classList.add('active');
    });
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('adminSession');
        window.location.href = 'login.html';
    }
});

// Initialize on page load
window.addEventListener('load', function() {
    if (checkAdminSession()) {
        initializeAdminData();
        loadMembers();
        loadRanks();
        loadGunPlans();
        loadRequests();
    }
});

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const memberModal = document.getElementById('memberModal');
    const rankModal = document.getElementById('rankModal');
    const gunPlanModal = document.getElementById('gunPlanModal');
    
    if (event.target === memberModal) {
        closeMemberModal();
    }
    if (event.target === rankModal) {
        closeRankModal();
    }
    if (event.target === gunPlanModal) {
        closeGunPlanModal();
    }
});
