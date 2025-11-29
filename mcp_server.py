from mcp.server.fastmcp import FastMCP
import json

# Initialize the MCP Server
mcp = FastMCP("Darshan Portfolio")

# --- PORTFOLIO DATA (Mirrored from your website) ---
portfolio_data = {
    "name": "Darshan BS",
    "role": "Electronics & Communication Engineer",
    "location": "Mysuru, Karnataka",
    "objective": "To obtain a responsible career where I can optimally utilize my educational qualifications and professional experience to contribute to a progressive organization.",
    "technicalSkills": ["Python", "C", "Embedded C", "Matlab"],
    "softSkills": ["Time Management", "Active Listening", "Empathy"],
    "education": [
        { "degree": "B.E. in Electronics & Communication", "school": "P.E.S. College of Engineering, Mandya", "year": "2025 (Ongoing)", "score": "6.5 CGPA" },
        { "degree": "12th (PUC)", "school": "Marimallappa P U College, Mysuru", "year": "2022", "score": "80%" },
        { "degree": "10th (SSLC)", "school": "J S S High School, Sutturu", "year": "2020", "score": "86%" }
    ],
    "projects": [
        { 
            "name": "Reverse Guide System for Automobiles", 
            "desc": "Developed a system using CAN Protocol to assist in vehicle reversing. Research published: https://zenodo.org/records/15809013" 
        }
    ],
    "contact": {
        "email": "sanjeevdarshan073@gmail.com",
        "linkedin": "linkedin.com/in/darshan-b-s-410500268",
        "phone": "+91 7022376570"
    },
    "interests": ["Cricket", "Movies", "Farming", "Finance"],
    "languages": ["English", "Kannada", "Hindi"]
}

# --- RESOURCES (Data that AIs can read) ---

@mcp.resource("portfolio://resume")
def get_full_resume() -> str:
    """Returns the full resume data in JSON format."""
    return json.dumps(portfolio_data, indent=2)

@mcp.resource("portfolio://projects")
def get_projects_list() -> str:
    """Returns the list of projects."""
    return json.dumps(portfolio_data["projects"], indent=2)

# --- TOOLS (Functions that AIs can call) ---

@mcp.tool()
def get_contact_info() -> str:
    """Get Darshan's contact details (Email, Phone, LinkedIn)."""
    return f"Email: {portfolio_data['contact']['email']}\nPhone: {portfolio_data['contact']['phone']}\nLinkedIn: {portfolio_data['contact']['linkedin']}"

@mcp.tool()
def get_skills(category: str = "all") -> str:
    """
    Get Darshan's skills. 
    Args:
        category: 'technical', 'soft', or 'all'
    """
    if category.lower().startswith("tech"):
        return f"Technical Skills: {', '.join(portfolio_data['technicalSkills'])}"
    elif category.lower().startswith("soft"):
        return f"Soft Skills: {', '.join(portfolio_data['softSkills'])}"
    else:
        return f"Technical: {', '.join(portfolio_data['technicalSkills'])}\nSoft: {', '.join(portfolio_data['softSkills'])}"

@mcp.tool()
def get_education() -> str:
    """Get Darshan's educational background."""
    edu_str = ""
    for edu in portfolio_data["education"]:
        edu_str += f"- {edu['degree']} at {edu['school']} ({edu['year']}) - Score: {edu['score']}\n"
    return edu_str

if __name__ == "__main__":
    # Run the server
    mcp.run()
