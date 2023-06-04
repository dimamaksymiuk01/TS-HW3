// задача 1: Реалізація інтерфейсу для геометричних фігур
//
// Створіть інтерфейс Shape, який має дві властивості: name типу string і calculateArea типу функції,
//  яка повертає number. Реалізуйте цей інтерфейс для двох геометричних фігур: коло і прямокутник.
//
// Задача 2: Оновлення налаштувань
//
// Створіть інтерфейс Settings, який має наступні властивості: theme типу string, fontSize типу number
//  і isDarkMode типу boolean, але зробіть всі властивості необов'язковими, використовуючи оператор ?.
// Далі створіть функцію updateSettings, яка приймає об'єкт типу Settings і оновлює налаштування програми.
//
// адача 3: Об'єднання даних з двох джерел
//
// Створіть два інтерфейси: User і Account. Інтерфейс User містить властивості name типу string і age типу number,
//  а інтерфейс Account містить властивості username типу string і email типу string. Далі створіть інтерфейс UserProfile,
//  який є результатом інтерсекції User і Account.
// Напишіть функцію getUserProfile, яка приймає об'єкт типу User і Account і повертає об'єкт типу UserProfile.


//task 1
// брехати не буду, тут мені допоміг чат бо я навіть не зрозумів суть завдання(((((
interface Shape {
    name: string;
    calculateArea: () => number;
}

const createCircle = (name: string, radius: number): Shape => ({
    name,
    calculateArea: () => Math.PI * radius ** 2,
});
const createRectangle = (name: string, width: number, height: number): Shape => {
    return {
        name,
        calculateArea: () => width * height,
    };
};
const circle = createCircle("Circle", 5);
console.log(circle.name);
console.log(circle.calculateArea());

const rectangle = createRectangle("Rectangle", 4, 6);
console.log(rectangle.name);
console.log(rectangle.calculateArea());


//task 2
interface Settings {
    theme?: string;
    fontSize?: number;
    isDarkMode?: boolean;
}

function updateSettings(settings: Settings): void {
    console.log("Updated settings:");
    console.log("Theme:", settings.theme);
    console.log("Font Size:", settings.fontSize);
    console.log("Dark Mode:", settings.isDarkMode);
}

const newSettings: Settings = {
    theme: "Light",
    fontSize: 14,
    isDarkMode: false,
};
updateSettings(newSettings);


//task 3
interface User {
    name: string;
    age: number;
}

interface Account {
    username: string;
    email: string;
}

type UserProfile = User & Account;

function getUserProfile(user: User, account: Account): UserProfile {
    return {...user, ...account};
}

const user = {name: "John", age: 25};
const account = {username: "john123", email: "john@example.com"};
const userProfile = getUserProfile(user, account);
console.log(userProfile);