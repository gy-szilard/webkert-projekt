const API_URL = "http://localhost:3001/users";

export async function registerUser(userData) {
    // 🔥 1. Ellenőrizzük, hogy létezik-e már ilyen email
    const checkRes = await fetch(`${API_URL}?email=${userData.email}`);
    const existingUsers = await checkRes.json();

    if (existingUsers.length > 0) {
        throw new Error("Ez az email cím már használatban van.");
    }

    // 🔥 2. Ha nincs ilyen email, mehet a regisztráció
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });

    if (!res.ok) throw new Error("Hiba a regisztráció során.");
    return res.json();
}

export async function loginUser(email, password) {
    const res = await fetch(`${API_URL}?email=${email}&password=${password}`);
    const data = await res.json();

    if (data.length === 0) throw new Error("Hibás email vagy jelszó.");
    return data[0];
}

export async function deleteUser(id) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!res.ok) throw new Error("Nem sikerült törölni a felhasználót.");
    return true;
}

export async function updateUser(id, updatedData) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData)
    });

    if (!res.ok) throw new Error("Nem sikerült frissíteni a felhasználót.");
    return res.json();
}
