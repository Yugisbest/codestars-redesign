import { useState } from "react";

const mockUsers = [
  {
    id: 1,
    name: "Aarav Mehta",
    username: "aarav",
    year: "2nd Year",
    department: "Computer Science",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    name: "Riya Shah",
    username: "riya",
    year: "2nd Year",
    department: "Data Science",
    skills: ["Python", "AI/ML", "Data Science"],
  },
  {
    id: 3,
    name: "Kabir Patel",
    username: "kabir",
    year: "3rd Year",
    department: "Computer Science",
    skills: ["Java", "DSA", "Backend"],
  },
  {
    id: 4,
    name: "Ananya Joshi",
    username: "ananya",
    year: "2nd Year",
    department: "Information Technology",
    skills: ["UI/UX", "React", "Figma"],
  },
];

function Friends() {
  const [friends, setFriends] = useState(() => {
    const savedFriends = localStorage.getItem("codestars-friends");

    return savedFriends ? JSON.parse(savedFriends) : [];
  });

  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedDepartment, setSelectedDepartment] = useState("All");


  function addFriend(user) {
    const updatedFriends = [...friends, user];

    setFriends(updatedFriends);

    localStorage.setItem(
      "codestars-friends",
      JSON.stringify(updatedFriends)
    );
  }

  function removeFriend(userId) {
    const updatedFriends = friends.filter(
      (friend) => friend.id !== userId
    );

    setFriends(updatedFriends);

    localStorage.setItem(
      "codestars-friends",
      JSON.stringify(updatedFriends)
    );
  }

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch = `${user.name} ${user.username}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesYear =
      selectedYear === "All" || user.year === selectedYear;

    const matchesDepartment =
      selectedDepartment === "All" ||
      user.department === selectedDepartment;

    return matchesSearch && matchesYear && matchesDepartment;
  });


  return (
    <main className="friends-page">

      <section className="friends-hero">
        <span>🤝 CODESTARS COMMUNITY</span>

        <h1>Friends</h1>

        <p>
          Connect with coders, discover new skills and build
          your network.
        </p>
      </section>

      <section className="friends-search">

        <input
          type="text"
          placeholder="Search coders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="All">All Years</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>

        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Data Science">Data Science</option>
          <option value="Information Technology">
            Information Technology
          </option>
        </select>

      </section>

      <section className="friends-section">

        <h2>Discover Coders</h2>

        <div className="users-grid">

          {filteredUsers.map((user) => {
            const isFriend = friends.some(
              (friend) => friend.id === user.id
            );

            return (
              <div className="user-card" key={user.id}>

                <div className="user-avatar">
                  {user.name.charAt(0)}
                </div>

                <h3>{user.name}</h3>

                <span className="user-username">
                  @{user.username}
                </span>

                <div className="user-meta">
                  <span>{user.year}</span>
                  <span>{user.department}</span>
                </div>

                <div className="user-skills">
                  {user.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <button
                  className={isFriend ? "friend-added" : ""}
                  onClick={() =>
                    isFriend
                      ? removeFriend(user.id)
                      : addFriend(user)
                  }
                >
                  {isFriend ? "✓ Friends" : "+ Add Friend"}
                </button>

              </div>
            );
          })}

        </div>

      </section>

      <section className="friends-section">

        <h2>Your Friends</h2>

        {friends.length === 0 ? (
          <div className="empty-friends">
            <div className="empty-friends-icon">+</div>

            <div>
              <strong>No friends yet</strong>
              <p>
                Discover coders above and start building your
                CodeStars network.
              </p>
            </div>
          </div>
        ) : (
          <div className="friends-list">

            {friends.map((friend) => (
              <div className="friend-row" key={friend.id}>

                <div className="user-avatar">
                  {friend.name.charAt(0)}
                </div>

                <div>
                  <strong>{friend.name}</strong>
                  <span>@{friend.username}</span>
                </div>

                <button
                  onClick={() => removeFriend(friend.id)}
                >
                  Remove
                </button>

              </div>
            ))}

          </div>
        )}

      </section>

    </main>
  );
}

export default Friends;