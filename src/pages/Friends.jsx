import { useState } from "react";

const mockUsers = [
  {
    id: 1,
    name: "Aarav Mehta",
    username: "aarav",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    name: "Riya Shah",
    username: "riya",
    skills: ["Python", "AI/ML", "Data Science"],
  },
  {
    id: 3,
    name: "Kabir Patel",
    username: "kabir",
    skills: ["Java", "DSA", "Backend"],
  },
  {
    id: 4,
    name: "Ananya Joshi",
    username: "ananya",
    skills: ["UI/UX", "React", "Figma"],
  },
];

function Friends() {
  const [friends, setFriends] = useState(() => {
    const savedFriends = localStorage.getItem("codestars-friends");

    return savedFriends ? JSON.parse(savedFriends) : [];
  });

  const [search, setSearch] = useState("");

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

  const filteredUsers = mockUsers.filter((user) =>
    `${user.name} ${user.username}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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
          <p className="empty-friends">
            You haven't added anyone yet.
          </p>
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