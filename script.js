const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

// --- PORTFOLIO DATA ---
const portfolioData = {
    name: "Darshan BS",
    role: "Electronics & Communication Engineer",
    location: "Mysuru, Karnataka",
    objective: "To obtain a responsible career where I can optimally utilize my educational qualifications and professional experience to contribute to a progressive organization.",
    technicalSkills: ["Python", "C", "Embedded C", "Matlab"],
    softSkills: ["Time Management", "Active Listening", "Empathy"],
    education: [
        { degree: "B.E. in Electronics & Communication", school: "P.E.S. College of Engineering, Mandya", year: "2025 (Ongoing)", score: "6.5 CGPA" },
        { degree: "12th (PUC)", school: "Marimallappa P U College, Mysuru", year: "2022", score: "80%" },
        { degree: "10th (SSLC)", school: "J S S High School, Sutturu", year: "2020", score: "86%" }
    ],
    projects: [
        {
            name: "Reverse Guide System for Automobiles",
            desc: "Developed a system using CAN Protocol to assist in vehicle reversing. Research published: https://zenodo.org/records/15809013"
        }
    ],
    contact: {
        email: "sanjeevdarshan073@gmail.com",
        linkedin: "linkedin.com/in/darshan-b-s-410500268",
        phone: "+91 7022376570"
    },
    interests: ["Cricket", "Movies", "Farming", "Finance"],
    languages: ["English", "Kannada", "Hindi"]
};

// --- CONFIGURATION ---
const CONFIG = {
    API_KEY: ""
};

// --- STATE ---
let apiKey = null;

// --- INITIALIZATION ---
window.onload = () => {
    // Initial greeting
    setTimeout(() => {
        addBotMessage(`Hi there! I'm ${portfolioData.name}'s AI assistant. 👋`);
    }, 500);
    setTimeout(() => {
        addBotMessage("I can tell you about my **projects**, **skills**, **education**, or **contact** info.");
    }, 1500);
};

// --- CORE FUNCTIONS ---

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

async function sendMessage(text = null) {
    const message = text || userInput.value.trim();
    if (!message) return;

    // Add User Message
    addUserMessage(message);
    userInput.value = '';

    // Show Typing Indicator
    showTyping();

    // Basic Mode (Simulated delay)
    setTimeout(() => {
        removeTyping();
        const response = generateBasicResponse(message.toLowerCase());
        addBotMessage(response);
    }, 1000 + Math.random() * 500);
}

function addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'message user-message';
    div.textContent = text;
    chatMessages.appendChild(div);
    scrollToBottom();
}

function addBotMessage(text) {
    const div = document.createElement('div');
    div.className = 'message bot-message';
    div.innerHTML = formatText(text);
    chatMessages.appendChild(div);
    scrollToBottom();
}

function showTyping() {
    const div = document.createElement('div');
    div.className = 'typing';
    div.id = 'typing-indicator';
    div.innerHTML = `
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    `;
    chatMessages.appendChild(div);
    scrollToBottom();
}

function removeTyping() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
}

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function formatText(text) {
    // Basic Markdown formatting
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>'); // Italic
    formatted = formatted.replace(/\n/g, '<br>'); // Newlines
    return formatted;
}

// --- BASIC FALLBACK LOGIC ---

function generateBasicResponse(input) {
    if (input.match(/hi|hello|hey|sup|yo/)) {
        return "Hello! I am Darshan's AI assistant. Ask me about my **projects**, **skills**, **education**, or **contact** info.";
    }
    if (input.match(/project|work|built|create|app/)) {
        let response = "Here is my key project:<br><br>";
        portfolioData.projects.forEach(p => {
            response += `🔹 <strong>${p.name}</strong>: ${p.desc}<br>`;
        });
        return response;
    }
    if (input.match(/soft/)) {
        return `My **Soft Skills** include: ${portfolioData.softSkills.join(', ')}.`;
    }
    if (input.match(/tech|hard|stack|code|program/)) {
        return `My **Technical Skills** include: ${portfolioData.technicalSkills.join(', ')}.`;
    }
    if (input.match(/skill|know/)) {
        return `I possess both technical and soft skills:<br><br>💻 **Technical:** ${portfolioData.technicalSkills.join(', ')}<br>🤝 **Soft:** ${portfolioData.softSkills.join(', ')}`;
    }
    if (input.match(/education|study|college|school|degree/)) {
        let response = "My Educational Background:<br><br>";
        portfolioData.education.forEach(e => {
            response += `🎓 <strong>${e.degree}</strong><br>${e.school} (${e.year}) - ${e.score}<br><br>`;
        });
        return response;
    }
    if (input.match(/linkedin/)) {
        return `🔗 **LinkedIn:** ${portfolioData.contact.linkedin}`;
    }
    if (input.match(/email|mail/)) {
        return `📧 **Email:** ${portfolioData.contact.email}`;
    }
    if (input.match(/phone|call|mobile|number/)) {
        return `📱 **Phone:** ${portfolioData.contact.phone}`;
    }
    if (input.match(/contact|reach|hire/)) {
        return `Let's connect! 🤝<br>📧 Email: ${portfolioData.contact.email}<br>📱 Phone: ${portfolioData.contact.phone}<br>🔗 LinkedIn: ${portfolioData.contact.linkedin}`;
    }
    if (input.match(/objective|goal|aim|career/)) {
        return `<strong>Career Objective:</strong><br>"${portfolioData.objective}"`;
    }
    if (input.match(/interest|hobby|hobbies|like|additional/)) {
        return `<strong>Interests:</strong> ${portfolioData.interests.join(', ')}`;
    }
    if (input.match(/language|speak|tongue/)) {
        return `<strong>Languages Known:</strong> ${portfolioData.languages.join(', ')}`;
    }
    if (input.match(/who|about|yourself/)) {
        return `I am ${portfolioData.name}, an <strong>${portfolioData.role}</strong> based in ${portfolioData.location}.<br><br><em>"${portfolioData.objective}"</em>`;
    }
    const fallbacks = [
        "I can tell you about my **education** and **projects**.",
        "Ask me about my **skills** in Python and Embedded C!",
        "Want to know how to **contact** me?"
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}
