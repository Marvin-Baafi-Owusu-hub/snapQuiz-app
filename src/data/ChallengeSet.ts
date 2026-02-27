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
        options: ["CPU", "RAM", "Hard Drive", "Monitor"], 
        answer: "CPU" 
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
        options: [ "World Wide Windows", "Western Web Works", "World Wide Web", "Wide Web Wire"], 
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
        options: ["Keyboard", "Router", "Scanner", "Printer"], 
        answer: "Router" 
    },
    { 
        id: 7, 
        text: "Where is data stored when you save it 'to the Cloud'?", 
        options: [ "In the air around your computer", "Inside your computer's screen", "On a satellite in space", "On remote servers accessed via the internet"], 
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
        options: ["Google Search", "Windows", "Facebook", "Microsoft Word"], 
        answer: "Windows" 
    },
    { 
        id: 10, 
        text: "What is the main advantage of using an 'SSD' (Solid State Drive) over an old 'HDD' (Hard Disk Drive)?", 
        options: ["It is much faster at loading files", "It is cheaper to buy", "It makes the screen brighter", "It works without electricity"], 
        answer: "It is much faster at loading files" 
    }
];