/* ============================================
   LSPD Roleplay Website - JavaScript
   Vanilla JavaScript - No Frameworks
   ============================================ */

// ============================================
// Sample Data
// ============================================

const membersData = [
    { id: 1, name: 'John Smith', rank: 'Captain', badge: 1001, stars: 5, joinDate: '2023-01-15', lastDuty: '2024-11-08', recordPoints: 950 },
    { id: 2, name: 'Sarah Johnson', rank: 'Sergeant', badge: 1002, stars: 4, joinDate: '2023-03-20', lastDuty: '2024-11-08', recordPoints: 850 },
    { id: 3, name: 'Michael Brown', rank: 'Officer', badge: 1003, stars: 3, joinDate: '2023-05-10', lastDuty: '2024-11-07', recordPoints: 720 },
    { id: 4, name: 'Emily Davis', rank: 'Officer', badge: 1004, stars: 3, joinDate: '2023-06-15', lastDuty: '2024-11-08', recordPoints: 680 },
    { id: 5, name: 'David Wilson', rank: 'Cadet', badge: 1005, stars: 2, joinDate: '2024-08-01', lastDuty: '2024-11-06', recordPoints: 450 },
    { id: 6, name: 'Lisa Anderson', rank: 'Lieutenant', badge: 1006, stars: 4, joinDate: '2023-02-20', lastDuty: '2024-11-08', recordPoints: 900 },
    { id: 7, name: 'James Martinez', rank: 'Officer', badge: 1007, stars: 3, joinDate: '2023-07-12', lastDuty: '2024-11-07', recordPoints: 700 },
    { id: 8, name: 'Rachel Taylor', rank: 'Cadet', badge: 1008, stars: 2, joinDate: '2024-09-05', lastDuty: '2024-11-08', recordPoints: 380 },
];

const equipmentData = [
    {
        rank: 'Cadet',
        items: ['Flashlight', 'Radio', 'Nightstick', 'Handcuffs', 'Badge']
    },
    {
        rank: 'Officer',
        items: ['Pistol', 'Radio', 'Baton', 'Handcuffs', 'Badge', 'Flashlight', 'Pepper Spray']
    },
    {
        rank: 'Sergeant',
        items: ['Pistol', 'SMG', 'Flashbang', 'Radio', 'Baton', 'Handcuffs', 'Badge', 'Flashlight', 'Tactical Vest']
    },
    {
        rank: 'Lieutenant',
        items: ['Pistol', 'SMG', 'Shotgun', 'Flashbang', 'Radio', 'Baton', 'Handcuffs', 'Badge', 'Flashlight', 'Tactical Vest', 'Armor']
    },
    {
        rank: 'Captain',
        items: ['Pistol', 'Shotgun', 'SMG', 'Tactical Armor', 'Radio', 'Baton', 'Handcuffs', 'Badge', 'Flashlight', 'Flashbang', 'Advanced Radio']
    },
    {
        rank: 'Commander',
        items: ['Pistol', 'Shotgun', 'SMG', 'Rifle', 'Tactical Armor', 'Advanced Radio', 'Command Tablet', 'Badge', 'Handcuffs', 'Flashbang', 'Smoke Grenade']
    }
];

const vehiclesData = [
    { id: 1, name: 'Police Cruiser', rank: 'Cadet', emoji: '🚔', speed: 180, durability: 85, handling: 75, description: 'Standard patrol vehicle for cadets' },
    { id: 2, name: 'Patrol Car', rank: 'Officer', emoji: '🚓', speed: 190, durability: 90, handling: 80, description: 'Reliable patrol vehicle for officers' },
    { id: 3, name: 'Police Bike', rank: 'Officer', emoji: '🏍️', speed: 210, durability: 70, handling: 95, description: 'High-speed pursuit vehicle' },
    { id: 4, name: 'Unmarked Vehicle', rank: 'Sergeant', emoji: '🚗', speed: 200, durability: 95, handling: 85, description: 'Undercover operations vehicle' },
    { id: 5, name: 'Police SUV', rank: 'Captain', emoji: '🚙', speed: 185, durability: 100, handling: 70, description: 'Heavy-duty command vehicle' },
    { id: 6, name: 'Helicopter', rank: 'Captain', emoji: '🚁', speed: 250, durability: 80, handling: 60, description: 'Aerial support and surveillance' },
    { id: 7, name: 'SWAT Van', rank: 'Lieutenant', emoji: '🚐', speed: 170, durability: 110, handling: 65, description: 'Tactical response vehicle' },
    { id: 8, name: 'Command Center', rank: 'Commander', emoji: '📡', speed: 150, durability: 120, handling: 50, description: 'Mobile command and coordination' },
];

const licensePlans = [
    {
        name: 'Basic',
        price: '5000',
        features: ['Pistol License', 'Basic Training', 'Standard Ammunition', 'License Valid for 30 Days', 'Support Access']
    },
    {
        name: 'Advanced',
        price: '12000',
        features: ['Pistol & SMG License', 'Advanced Training', 'Expanded Ammunition', 'License Valid for 90 Days', 'Priority Support', 'Tactical Gear Discount'],
        featured: true
    },
    {
        name: 'Professional',
        price: '25000',
        features: ['All Weapons License', 'Professional Training', 'Premium Ammunition', 'License Valid for 180 Days', 'VIP Support', 'Exclusive Gear Access', 'Advanced Tactics']
    },
    {
        name: 'Tactical',
        price: '50000',
        features: ['Unrestricted Weapons', 'Elite Training Program', 'Custom Ammunition', 'Lifetime License', '24/7 Support', 'Exclusive Tactical Gear', 'Command Authority', 'Special Operations Access']
    }
];

const divisionsData = [
    {
        id: 1,
        name: 'Patrol Division',
        emoji: '🚔',
        description: 'General patrol and community policing',
        officers: 45,
        commander: 'Captain John Smith',
        responsibilities: ['Traffic enforcement', 'Community patrols', 'Emergency response', 'Public safety']
    },
    {
        id: 2,
        name: 'Detective Division',
        emoji: '🔍',
        description: 'Criminal investigation and case work',
        officers: 28,
        commander: 'Lieutenant Sarah Johnson',
        responsibilities: ['Criminal investigations', 'Case management', 'Evidence handling', 'Witness interviews']
    },
    {
        id: 3,
        name: 'SWAT Division',
        emoji: '⚔️',
        description: 'Special weapons and tactical operations',
        officers: 18,
        commander: 'Captain Michael Brown',
        responsibilities: ['High-risk operations', 'Tactical response', 'Hostage situations', 'Specialized training']
    },
    {
        id: 4,
        name: 'Traffic Division',
        emoji: '🚨',
        description: 'Traffic control and accident investigation',
        officers: 22,
        commander: 'Sergeant Emily Davis',
        responsibilities: ['Traffic enforcement', 'Accident investigation', 'DUI enforcement', 'Road safety']
    },
    {
        id: 5,
        name: 'K9 Unit',
        emoji: '🐕',
        description: 'Canine-assisted law enforcement',
        officers: 12,
        commander: 'Officer James Martinez',
        responsibilities: ['Drug detection', 'Search and rescue', 'Suspect apprehension', 'Training']
    },
    {
        id: 6,
        name: 'Air Support',
        emoji: '🚁',
        description: 'Aerial surveillance and support',
        officers: 8,
        commander: 'Officer Rachel Taylor',
        responsibilities: ['Aerial surveillance', 'Pursuit support', 'Search operations', 'Emergency response']
    }
];

const ranksData = [
    {
        rank: 'Cadet',
        level: 1,
        description: 'Entry-level position for new recruits',
        requirements: 'Complete academy training',
        salary: '2500 RP/week',
        color: '#0EA5E9'
    },
    {
        rank: 'Officer',
        level: 2,
        description: 'Fully certified police officer',
        requirements: '2 weeks as Cadet, pass certification exam',
        salary: '3500 RP/week',
        color: '#06B6D4'
    },
    {
        rank: 'Sergeant',
        level: 3,
        description: 'Supervisory role with team leadership',
        requirements: '4 weeks as Officer, leadership evaluation',
        salary: '5000 RP/week',
        color: '#0891B2'
    },
    {
        rank: 'Lieutenant',
        level: 4,
        description: 'Senior supervisory and administrative role',
        requirements: '6 weeks as Sergeant, command training',
        salary: '7000 RP/week',
        color: '#0369A1'
    },
    {
        rank: 'Captain',
        level: 5,
        description: 'Division commander and department leader',
        requirements: '8 weeks as Lieutenant, strategic planning',
        salary: '9000 RP/week',
        color: '#0284C7'
    },
    {
        rank: 'Commander',
        level: 6,
        description: 'Chief executive of the department',
        requirements: 'Appointment by administration',
        salary: '12000 RP/week',
        color: '#0369A1'
    }
];

const newsData = [
    {
        id: 1,
        title: 'New Training Program Launched',
        date: '2024-11-08',
        category: 'Training',
        author: 'Captain John Smith',
        excerpt: 'Advanced tactical training program now available for all officers.',
        content: 'The LSPD is proud to announce the launch of our new advanced tactical training program. This comprehensive program is designed to enhance officer skills and preparedness for complex situations. All interested officers are encouraged to apply.'
    },
    {
        id: 2,
        title: 'Community Outreach Initiative',
        date: '2024-11-07',
        category: 'Community',
        author: 'Lieutenant Sarah Johnson',
        excerpt: 'LSPD launches new community engagement program.',
        content: 'The Los Santos Police Department is committed to strengthening relationships with the community. Our new outreach initiative includes neighborhood patrols, community events, and educational programs for local residents.'
    },
    {
        id: 3,
        title: 'Equipment Upgrade Completed',
        date: '2024-11-06',
        category: 'Equipment',
        author: 'Captain Michael Brown',
        excerpt: 'All patrol vehicles now equipped with latest technology.',
        content: 'The equipment upgrade project has been successfully completed. All patrol vehicles are now equipped with the latest GPS, communication systems, and safety features to enhance officer effectiveness and safety.'
    },
    {
        id: 4,
        title: 'Officer Recognition Ceremony',
        date: '2024-11-05',
        category: 'Recognition',
        author: 'Commander',
        excerpt: 'Outstanding officers recognized for exceptional service.',
        content: 'The LSPD held its monthly recognition ceremony to honor officers who have demonstrated exceptional dedication and service to the community. Congratulations to all recipients!'
    },
    {
        id: 5,
        title: 'New Recruitment Drive',
        date: '2024-11-04',
        category: 'Recruitment',
        author: 'Captain John Smith',
        excerpt: 'Join the LSPD - We are hiring qualified candidates.',
        content: 'The Los Santos Police Department is actively recruiting qualified candidates. If you are interested in a career in law enforcement, please visit our recruitment office or contact us for more information.'
    },
    {
        id: 6,
        title: 'Safety Protocol Update',
        date: '2024-11-03',
        category: 'Safety',
        author: 'Lieutenant Sarah Johnson',
        excerpt: 'Updated safety protocols now in effect.',
        content: 'Effective immediately, all officers must follow the updated safety protocols. These new guidelines have been developed to ensure maximum officer safety and operational effectiveness.'
    }
];

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializePage();
});

// ============================================
// Navigation & Mobile Menu
// ============================================

function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// Page Initialization
// ============================================

function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (currentPage === 'members.html') {
        initializeMembers();
    } else if (currentPage === 'duty-items.html') {
        initializeEquipment();
    } else if (currentPage === 'vehicles.html') {
        initializeVehicles();
    } else if (currentPage === 'gun-license.html') {
        initializeLicensePlans();
        initializeLicenseForm();
    } else if (currentPage === 'divisions.html') {
        initializeDivisions();
    } else if (currentPage === 'ranks.html') {
        initializeRanks();
    } else if (currentPage === 'news.html') {
        initializeNews();
    } else if (currentPage === 'statistics.html') {
        initializeStatistics();
    } else if (currentPage === 'training.html') {
        initializeTraining();
    } else if (currentPage === 'recruitment.html') {
        initializeRecruitment();
    } else if (currentPage === 'achievements.html') {
        initializeAchievements();
    } else {
        initializeHome();
    }
}

// ============================================
// Home Page
// ============================================

function initializeHome() {
    // Simulate player count
    const playerCountElement = document.getElementById('playerCount');
    if (playerCountElement) {
        const randomPlayers = Math.floor(Math.random() * 50) + 10;
        playerCountElement.textContent = randomPlayers + ' / 100';
    }
}

// ============================================
// Members Page
// ============================================

function initializeMembers() {
    const searchInput = document.getElementById('searchInput');
    const rankFilter = document.getElementById('rankFilter');
    const membersGrid = document.getElementById('membersGrid');
    const memberModal = document.getElementById('memberModal');
    const closeModal = document.getElementById('closeModal');

    // Render members
    renderMembers(membersData, membersGrid);

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterMembers(searchInput.value, rankFilter.value, membersGrid);
        });
    }

    // Filter functionality
    if (rankFilter) {
        rankFilter.addEventListener('change', function() {
            filterMembers(searchInput.value, rankFilter.value, membersGrid);
        });
    }

    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            memberModal.classList.remove('active');
        });
    }

    // Close modal when clicking outside
    if (memberModal) {
        memberModal.addEventListener('click', function(e) {
            if (e.target === memberModal) {
                memberModal.classList.remove('active');
            }
        });
    }
}

function renderMembers(members, container) {
    container.innerHTML = '';
    
    if (members.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #415A77;">No members found.</p>';
        return;
    }

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <span class="member-badge">${member.rank}</span>
            <div class="member-name">${member.name}</div>
            <div class="member-info">
                <span>Badge: #${member.badge}</span>
                <span class="member-stars">★ ${member.stars}</span>
            </div>
        `;
        memberCard.addEventListener('click', function() {
            showMemberModal(member);
        });
        container.appendChild(memberCard);
    });
}

function filterMembers(searchTerm, rankFilter, container) {
    let filtered = membersData;

    if (searchTerm) {
        filtered = filtered.filter(member =>
            member.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (rankFilter) {
        filtered = filtered.filter(member => member.rank === rankFilter);
    }

    renderMembers(filtered, container);
}

function showMemberModal(member) {
    const memberModal = document.getElementById('memberModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h3>${member.name}</h3>
        <div class="member-badge">${member.rank}</div>
        <div class="modal-stats">
            <div class="stat-item">
                <div class="stat-label">Badge Number</div>
                <div class="stat-value">#${member.badge}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Star Record</div>
                <div class="stat-value">★ ${member.stars}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Join Date</div>
                <div class="stat-value">${formatDate(member.joinDate)}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Last Duty</div>
                <div class="stat-value">${formatDate(member.lastDuty)}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Record Points</div>
                <div class="stat-value">${member.recordPoints}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Status</div>
                <div class="stat-value" style="color: #10B981;">Active</div>
            </div>
        </div>
        <p>Officer ${member.name} is an exemplary member of the Los Santos Police Department with a distinguished record of service.</p>
    `;

    memberModal.classList.add('active');
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// ============================================
// Equipment Page
// ============================================

function initializeEquipment() {
    const equipmentGrid = document.getElementById('equipmentGrid');
    renderEquipment(equipmentData, equipmentGrid);
}

function renderEquipment(equipment, container) {
    container.innerHTML = '';

    equipment.forEach(rankEquipment => {
        const card = document.createElement('div');
        card.className = 'equipment-card';
        
        const itemsList = rankEquipment.items.map(item => `<li>${item}</li>`).join('');
        
        card.innerHTML = `
            <div class="rank-badge">${rankEquipment.rank}</div>
            <h3>${rankEquipment.rank} Equipment</h3>
            <ul class="equipment-list">
                ${itemsList}
            </ul>
        `;
        
        container.appendChild(card);
    });
}

// ============================================
// Vehicles Page
// ============================================

function initializeVehicles() {
    const vehiclesGrid = document.getElementById('vehiclesGrid');
    const vehicleModal = document.getElementById('vehicleModal');
    const closeVehicleModal = document.getElementById('closeVehicleModal');

    renderVehicles(vehiclesData, vehiclesGrid);

    if (closeVehicleModal) {
        closeVehicleModal.addEventListener('click', function() {
            vehicleModal.classList.remove('active');
        });
    }

    if (vehicleModal) {
        vehicleModal.addEventListener('click', function(e) {
            if (e.target === vehicleModal) {
                vehicleModal.classList.remove('active');
            }
        });
    }
}

function renderVehicles(vehicles, container) {
    container.innerHTML = '';

    vehicles.forEach(vehicle => {
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        
        card.innerHTML = `
            <div class="vehicle-image">${vehicle.emoji}</div>
            <div class="vehicle-content">
                <div class="vehicle-name">${vehicle.name}</div>
                <div class="vehicle-rank">${vehicle.rank}</div>
                <div class="vehicle-description">${vehicle.description}</div>
                <button class="view-stats-btn" onclick="showVehicleStats(${vehicle.id})">View Stats</button>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function showVehicleStats(vehicleId) {
    const vehicle = vehiclesData.find(v => v.id === vehicleId);
    if (!vehicle) return;

    const vehicleModal = document.getElementById('vehicleModal');
    const vehicleModalBody = document.getElementById('vehicleModalBody');

    vehicleModalBody.innerHTML = `
        <div style="text-align: center; font-size: 3rem; margin-bottom: 1rem;">${vehicle.emoji}</div>
        <h3>${vehicle.name}</h3>
        <p style="color: #0EA5E9; font-weight: 700; margin-bottom: 1.5rem;">${vehicle.rank} Rank</p>
        <p>${vehicle.description}</p>
        <div class="modal-stats">
            <div class="stat-item">
                <div class="stat-label">Top Speed</div>
                <div class="stat-value">${vehicle.speed} km/h</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Durability</div>
                <div class="stat-value">${vehicle.durability}%</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Handling</div>
                <div class="stat-value">${vehicle.handling}%</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Acceleration</div>
                <div class="stat-value">${Math.floor(vehicle.speed / 3)}%</div>
            </div>
        </div>
    `;

    vehicleModal.classList.add('active');
}

// ============================================
// Gun License Plans Page
// ============================================

function initializeLicensePlans() {
    const plansGrid = document.getElementById('plansGrid');
    renderLicensePlans(licensePlans, plansGrid);
}

function renderLicensePlans(plans, container) {
    container.innerHTML = '';

    plans.forEach(plan => {
        const card = document.createElement('div');
        card.className = `plan-card ${plan.featured ? 'featured' : ''}`;
        
        const featuresList = plan.features.map(feature => `<li>${feature}</li>`).join('');
        
        card.innerHTML = `
            <div class="plan-name">${plan.name}</div>
            <div class="plan-price">$<span>${plan.price}</span><span class="plan-currency"> RP</span></div>
            <ul class="plan-features">
                ${featuresList}
            </ul>
            <button class="apply-btn" onclick="scrollToForm()">Apply for License</button>
        `;
        
        container.appendChild(card);
    });
}

function initializeLicenseForm() {
    const licenseForm = document.getElementById('licenseForm');

    if (licenseForm) {
        licenseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLicenseFormSubmit();
        });
    }
}

function handleLicenseFormSubmit() {
    const applicantName = document.getElementById('applicantName').value.trim();
    const applicantID = document.getElementById('applicantID').value.trim();
    const planSelect = document.getElementById('planSelect').value;
    const applicantReason = document.getElementById('applicantReason').value.trim();
    const termsAgree = document.getElementById('termsAgree').checked;
    const formMessage = document.getElementById('formMessage');

    // Validation
    if (!applicantName || !applicantID || !planSelect || !applicantReason) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }

    if (!termsAgree) {
        showFormMessage('You must agree to the terms and conditions.', 'error');
        return;
    }

    // Simulate form submission
    showFormMessage('✓ Application submitted successfully! Your application is under review.', 'success');

    // Reset form
    document.getElementById('licenseForm').reset();

    // Clear message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

function scrollToForm() {
    const applicationSection = document.querySelector('.application-section');
    if (applicationSection) {
        applicationSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// Divisions Page
// ============================================

function initializeDivisions() {
    const divisionsGrid = document.getElementById('divisionsGrid');
    const divisionModal = document.getElementById('divisionModal');
    const closeDivisionModal = document.getElementById('closeDivisionModal');

    renderDivisions(divisionsData, divisionsGrid);

    if (closeDivisionModal) {
        closeDivisionModal.addEventListener('click', function() {
            divisionModal.classList.remove('active');
        });
    }

    if (divisionModal) {
        divisionModal.addEventListener('click', function(e) {
            if (e.target === divisionModal) {
                divisionModal.classList.remove('active');
            }
        });
    }
}

function renderDivisions(divisions, container) {
    container.innerHTML = '';

    divisions.forEach(division => {
        const card = document.createElement('div');
        card.className = 'division-card';
        
        card.innerHTML = `
            <div class="division-icon">${division.emoji}</div>
            <h3>${division.name}</h3>
            <p>${division.description}</p>
            <div class="division-info">
                <span>Officers: ${division.officers}</span>
                <span>Commander: ${division.commander}</span>
            </div>
            <button class="btn btn-secondary" onclick="showDivisionDetails(${division.id})">View Details</button>
        `;
        
        container.appendChild(card);
    });
}

function showDivisionDetails(divisionId) {
    const division = divisionsData.find(d => d.id === divisionId);
    if (!division) return;

    const divisionModal = document.getElementById('divisionModal');
    const divisionModalBody = document.getElementById('divisionModalBody');

    const responsibilitiesList = division.responsibilities.map(r => `<li>${r}</li>`).join('');

    divisionModalBody.innerHTML = `
        <div style="text-align: center; font-size: 3rem; margin-bottom: 1rem;">${division.emoji}</div>
        <h3>${division.name}</h3>
        <p style="color: #0EA5E9; font-weight: 700; margin-bottom: 1rem;">${division.description}</p>
        <div class="modal-stats">
            <div class="stat-item">
                <div class="stat-label">Total Officers</div>
                <div class="stat-value">${division.officers}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Division Commander</div>
                <div class="stat-value" style="font-size: 0.9rem;">${division.commander}</div>
            </div>
        </div>
        <h4 style="margin-top: 1.5rem; margin-bottom: 1rem; color: #0EA5E9;">Key Responsibilities</h4>
        <ul class="equipment-list">
            ${responsibilitiesList}
        </ul>
    `;

    divisionModal.classList.add('active');
}

// ============================================
// Ranks Page
// ============================================

function initializeRanks() {
    const ranksTimeline = document.getElementById('ranksTimeline');
    renderRanks(ranksData, ranksTimeline);
}

function renderRanks(ranks, container) {
    container.innerHTML = '';

    ranks.forEach((rank, index) => {
        const rankCard = document.createElement('div');
        rankCard.className = `rank-card ${index % 2 === 0 ? 'left' : 'right'}`;
        
        rankCard.innerHTML = `
            <div class="rank-content">
                <h3 style="color: ${rank.color};">${rank.rank}</h3>
                <p class="rank-description">${rank.description}</p>
                <div class="rank-details">
                    <div><strong>Requirements:</strong> ${rank.requirements}</div>
                    <div><strong>Salary:</strong> ${rank.salary}</div>
                </div>
            </div>
        `;
        
        container.appendChild(rankCard);
    });
}

// ============================================
// News Page
// ============================================

function initializeNews() {
    const newsGrid = document.getElementById('newsGrid');
    const newsModal = document.getElementById('newsModal');
    const closeNewsModal = document.getElementById('closeNewsModal');

    renderNews(newsData, newsGrid);

    if (closeNewsModal) {
        closeNewsModal.addEventListener('click', function() {
            newsModal.classList.remove('active');
        });
    }

    if (newsModal) {
        newsModal.addEventListener('click', function(e) {
            if (e.target === newsModal) {
                newsModal.classList.remove('active');
            }
        });
    }
}

function renderNews(articles, container) {
    container.innerHTML = '';

    articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'news-card';
        
        card.innerHTML = `
            <div class="news-header">
                <span class="news-category">${article.category}</span>
                <span class="news-date">${formatDate(article.date)}</span>
            </div>
            <h3>${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <p class="news-author">By ${article.author}</p>
            <button class="btn btn-secondary" onclick="showNewsDetails(${article.id})">Read More</button>
        `;
        
        container.appendChild(card);
    });
}

function showNewsDetails(newsId) {
    const article = newsData.find(n => n.id === newsId);
    if (!article) return;

    const newsModal = document.getElementById('newsModal');
    const newsModalBody = document.getElementById('newsModalBody');

    newsModalBody.innerHTML = `
        <span class="news-category">${article.category}</span>
        <h3>${article.title}</h3>
        <div style="margin: 1rem 0; color: #415A77; font-size: 0.9rem;">
            <strong>By ${article.author}</strong> | ${formatDate(article.date)}
        </div>
        <p>${article.content}</p>
    `;

    newsModal.classList.add('active');
}

// ============================================
// Statistics Page
// ============================================

function initializeStatistics() {
    const metricsGrid = document.getElementById('metricsGrid');
    renderMetrics(metricsGrid);
    renderCharts();
}

function renderMetrics(container) {
    const metrics = [
        { label: 'Total Officers', value: '156', icon: '👮' },
        { label: 'Active Divisions', value: '6', icon: '🏢' },
        { label: 'Vehicles', value: '45', icon: '🚔' },
        { label: 'Duty Hours', value: '2,847', icon: '⏰' },
        { label: 'Cases Solved', value: '89%', icon: '✓' },
        { label: 'Community Rating', value: '4.8/5', icon: '⭐' }
    ];

    container.innerHTML = '';
    metrics.forEach(metric => {
        const metricCard = document.createElement('div');
        metricCard.className = 'metric-card';
        metricCard.innerHTML = `
            <div class="metric-icon">${metric.icon}</div>
            <div class="metric-value">${metric.value}</div>
            <div class="metric-label">${metric.label}</div>
        `;
        container.appendChild(metricCard);
    });
}

function renderCharts() {
    // Render simple chart representations
    const rankChart = document.getElementById('rankChart');
    const divisionChart = document.getElementById('divisionChart');
    const activityChart = document.getElementById('activityChart');
    const performanceChart = document.getElementById('performanceChart');

    if (rankChart) {
        rankChart.innerHTML = `
            <div class="chart-bar" style="width: 80%; background: #0EA5E9; margin: 5px 0;"><span>Officer: 45</span></div>
            <div class="chart-bar" style="width: 60%; background: #06B6D4; margin: 5px 0;"><span>Sergeant: 28</span></div>
            <div class="chart-bar" style="width: 40%; background: #0891B2; margin: 5px 0;"><span>Lieutenant: 18</span></div>
            <div class="chart-bar" style="width: 30%; background: #0369A1; margin: 5px 0;"><span>Captain: 12</span></div>
            <div class="chart-bar" style="width: 15%; background: #0284C7; margin: 5px 0;"><span>Commander: 3</span></div>
        `;
    }

    if (divisionChart) {
        divisionChart.innerHTML = `
            <div class="chart-bar" style="width: 75%; background: #10B981; margin: 5px 0;"><span>Patrol: 45</span></div>
            <div class="chart-bar" style="width: 55%; background: #059669; margin: 5px 0;"><span>Detective: 28</span></div>
            <div class="chart-bar" style="width: 40%; background: #047857; margin: 5px 0;"><span>SWAT: 18</span></div>
            <div class="chart-bar" style="width: 45%; background: #065F46; margin: 5px 0;"><span>Traffic: 22</span></div>
        `;
    }

    if (activityChart) {
        activityChart.innerHTML = `
            <div class="chart-bar" style="width: 70%; background: #F59E0B; margin: 5px 0;"><span>Week 1: 156 hrs</span></div>
            <div class="chart-bar" style="width: 85%; background: #FBBF24; margin: 5px 0;"><span>Week 2: 189 hrs</span></div>
            <div class="chart-bar" style="width: 65%; background: #FCD34D; margin: 5px 0;"><span>Week 3: 145 hrs</span></div>
            <div class="chart-bar" style="width: 80%; background: #FDE68A; margin: 5px 0;"><span>Week 4: 178 hrs</span></div>
        `;
    }

    if (performanceChart) {
        performanceChart.innerHTML = `
            <div class="chart-bar" style="width: 95%; background: #8B5CF6; margin: 5px 0;"><span>Excellent: 95%</span></div>
            <div class="chart-bar" style="width: 85%; background: #A78BFA; margin: 5px 0;"><span>Good: 85%</span></div>
            <div class="chart-bar" style="width: 70%; background: #C4B5FD; margin: 5px 0;"><span>Average: 70%</span></div>
        `;
    }
}

// ============================================
// Utility Functions
// ============================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// Keyboard Navigation
// ============================================

document.addEventListener('keydown', function(e) {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

// ============================================
// Smooth Scroll Enhancement
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Page Load Animation
// ============================================

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ============================================
// Console Message
// ============================================

console.log('%cLSPD Roleplay Website', 'color: #0EA5E9; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to the Los Santos Police Department', 'color: #415A77; font-size: 14px;');

// Training Programs Data
const trainingPrograms = [
    {
        id: 1,
        name: 'Basic Academy',
        duration: '4 weeks',
        level: 'Cadet',
        emoji: '📚',
        description: 'Fundamental police training for new recruits',
        topics: ['Law Basics', 'Safety Procedures', 'Communication', 'Physical Training', 'Firearms Safety']
    },
    {
        id: 2,
        name: 'Advanced Tactics',
        duration: '6 weeks',
        level: 'Officer+',
        emoji: '⚔️',
        description: 'Advanced tactical training for experienced officers',
        topics: ['Combat Tactics', 'High-Risk Operations', 'Team Coordination', 'Strategic Planning', 'Crisis Management']
    },
    {
        id: 3,
        name: 'Detective Training',
        duration: '8 weeks',
        level: 'Sergeant+',
        emoji: '🔍',
        description: 'Criminal investigation and detective skills',
        topics: ['Investigation Methods', 'Evidence Collection', 'Interview Techniques', 'Case Management', 'Forensics Basics']
    }
];

const recruitmentRequirements = [
    { icon: '📋', title: 'Age Requirement', description: 'Must be at least 18 years old' },
    { icon: '✅', title: 'Background Check', description: 'Clean criminal record required' },
    { icon: '🎓', title: 'Education', description: 'High school diploma or equivalent' }
];

const achievementsData = [
    {
        id: 1,
        name: 'Medal of Valor',
        emoji: '🏅',
        category: 'Bravery',
        recipients: 12,
        description: 'Awarded for exceptional bravery and heroism in the line of duty',
        criteria: 'Demonstrated extraordinary courage and selflessness'
    },
    {
        id: 2,
        name: 'Distinguished Service',
        emoji: '⭐',
        category: 'Service',
        recipients: 28,
        description: 'Awarded for outstanding service and dedication',
        criteria: 'Exemplary performance and commitment to duty'
    }
];

// Training Page Functions
function initializeTraining() {
    const trainingGrid = document.getElementById('trainingGrid');
    if (trainingGrid) renderTrainingPrograms(trainingPrograms, trainingGrid);
}

function renderTrainingPrograms(programs, container) {
    container.innerHTML = '';
    programs.forEach(program => {
        const card = document.createElement('div');
        card.className = 'training-card';
        card.innerHTML = `
            <div class="training-icon">${program.emoji}</div>
            <h3>${program.name}</h3>
            <p class="training-level">Level: ${program.level}</p>
            <p class="training-duration">Duration: ${program.duration}</p>
            <button class="btn btn-secondary" onclick="alert('${program.name} - ${program.description}')">Learn More</button>
        `;
        container.appendChild(card);
    });
}

// Recruitment Page Functions
function initializeRecruitment() {
    const requirementsGrid = document.getElementById('requirementsGrid');
    if (requirementsGrid) renderRequirements(recruitmentRequirements, requirementsGrid);
    
    const recruitmentForm = document.getElementById('recruitmentForm');
    if (recruitmentForm) {
        recruitmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleRecruitmentSubmit();
        });
    }
}

function renderRequirements(requirements, container) {
    container.innerHTML = '';
    requirements.forEach(req => {
        const card = document.createElement('div');
        card.className = 'requirement-card';
        card.innerHTML = `
            <div class="requirement-icon">${req.icon}</div>
            <h3>${req.title}</h3>
            <p>${req.description}</p>
        `;
        container.appendChild(card);
    });
}

function handleRecruitmentSubmit() {
    const name = document.getElementById('applicantName').value;
    const message = document.getElementById('recruitmentMessage');
    const form = document.getElementById('recruitmentForm');
    
    if (name) {
        message.style.display = 'block';
        message.className = 'form-message success';
        message.innerHTML = '<strong>Application Received!</strong><br>Thank you, ' + name + '! Your application has been submitted successfully.';
        form.style.display = 'none';
    }
}

// Achievements Page Functions
function initializeAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');
    if (achievementsGrid) renderAchievements(achievementsData, achievementsGrid);
}

function renderAchievements(achievements, container) {
    container.innerHTML = '';
    achievements.forEach(achievement => {
        const card = document.createElement('div');
        card.className = 'achievement-card';
        card.innerHTML = `
            <div class="achievement-icon">${achievement.emoji}</div>
            <h3>${achievement.name}</h3>
            <p class="achievement-category">${achievement.category}</p>
            <p class="achievement-recipients">Recipients: ${achievement.recipients}</p>
            <button class="btn btn-secondary" onclick="alert('${achievement.name}: ${achievement.criteria}')">View Details</button>
        `;
        container.appendChild(card);
    });
}


// ============================================
// Scroll Animation Effects
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Add scroll animation observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const elements = document.querySelectorAll(
        '.member-card, .vehicle-card, .division-card, .training-card, .achievement-card, ' +
        '.requirement-card, .news-card, .metric-card, .chart-card, .about-card, .link-card'
    );

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = '0 ' + (scrollPosition * 0.5) + 'px';
    }
});

// Add fade effect on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.pageYOffset > 100) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.boxShadow = 'var(--shadow-md)';
        }
    }
});

