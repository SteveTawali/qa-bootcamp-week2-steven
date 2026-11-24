
type UserProfile = {
    id: number;
    username: string;
    score?: number;
    settings?: {
        notifications?: boolean;
    };
};

const user1: UserProfile = {
    id: 1,
    username: "steven",
    score: 85,
    settings: {
        notifications: true,
    },
};

const user2: UserProfile = {
    id: 2,
    username: "mary",
};

const user3: UserProfile = {
    id: 3,
    username: "john",
    score: 0,
    settings: {},
};

function isNotified(user: UserProfile): boolean {
    return user.settings?.notifications ?? false;
}

console.log(`${user1.username}: ${isNotified(user1)}`);
console.log(`${user2.username}: ${isNotified(user2)}`);
console.log(`${user3.username}: ${isNotified(user3)}`);

console.log("Using ||:", user3.score || 10);
console.log("Using ??:", user3.score ?? 10);
