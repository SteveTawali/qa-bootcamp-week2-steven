type User = {
    username: string;
    settings?: {
        notifications?: boolean;
    };
};

const user1: User = {
    username: "Tawali",
    settings: {
        notifications: true
    }
};

const user2: User = {
    username: "Nicole"
};

console.log(user1.settings?.notifications);
console.log(user2.settings?.notifications);