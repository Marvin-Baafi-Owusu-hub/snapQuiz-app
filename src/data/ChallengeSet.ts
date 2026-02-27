export type Question = {
    id: number;
    text: string;
    options: string[];
    answer: string;
}

export const ITChallengeQuestions: Question[] = [
    { 
        id: 1, 
        text: "What is often called the 'Brain' of the computer because it performs all the calculations?", 
        options: ["CPU (Processor)", "RAM (Memory)", "Hard Drive", "Monitor"], 
        answer: "CPU (Processor)" 
    },
    { 
        id: 2, 
        text: "Which of these is used for short-term memory to help your computer run apps faster?", 
        options: ["RAM", "Power Supply", "Graphics Card", "USB Drive"], 
        answer: "RAM" 
    },
    { 
        id: 3, 
        text: "What does 'WWW' stand for in a website address?", 
        options: ["World Wide Web", "Western Web Works", "World Wide Windows", "Wide Web Wire"], 
        answer: "World Wide Web" 
    },
    { 
        id: 4, 
        text: "Which type of software is designed to damage or gain unauthorized access to a computer?", 
        options: ["Malware", "Operating System", "Browser", "Antivirus"], 
        answer: "Malware" 
    },
    { 
        id: 5, 
        text: "What is the primary purpose of a 'Firewall' in IT?", 
        options: ["To block unauthorized access to a network", "To speed up the internet", "To cool down the computer hardware", "To delete old files"], 
        answer: "To block unauthorized access to a network" 
    },
    { 
        id: 6, 
        text: "Which device connects multiple computers together to share an internet connection in a home?", 
        options: ["Router", "Keyboard", "Scanner", "Printer"], 
        answer: "Router" 
    },
    { 
        id: 7, 
        text: "Where is data stored when you save it 'to the Cloud'?", 
        options: ["On remote servers accessed via the internet", "Inside your computer's screen", "On a satellite in space", "In the air around your computer"], 
        answer: "On remote servers accessed via the internet" 
    },
    { 
        id: 8, 
        text: "What does 'HTTP' at the beginning of a URL help the browser do?", 
        options: ["Transfer data over the web", "Check the battery life", "Save a password", "Search for images"], 
        answer: "Transfer data over the web" 
    },
    { 
        id: 9, 
        text: "Which of these is an example of an 'Operating System'?", 
        options: ["Windows", "Google Search", "Facebook", "Microsoft Word"], 
        answer: "Windows" 
    },
    { 
        id: 10, 
        text: "What is the main advantage of using an 'SSD' (Solid State Drive) over an old 'HDD' (Hard Disk Drive)?", 
        options: ["It is much faster at loading files", "It is cheaper to buy", "It makes the screen brighter", "It works without electricity"], 
        answer: "It is much faster at loading files" 
    }
];