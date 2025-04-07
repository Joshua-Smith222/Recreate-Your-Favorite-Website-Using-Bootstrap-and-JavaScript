document.getElementById('searchBtn').addEventListener('click', function () {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsTable = document.getElementById('resultsTable');
    resultsTable.innerHTML = ''; // clear previous results

    // Example static data – replace with actual fetch from your API
    const mockUsers = [
      {
        profilePic: 'https://via.placeholder.com/50',
        fullName: 'Jane Doe',
        username: 'jane.doe',
        bio: 'Web Developer'
      },
      {
        profilePic: 'https://via.placeholder.com/50',
        fullName: 'John Smith',
        username: 'johnny',
        bio: 'Photographer'
      }
    ];

    const filteredUsers = mockUsers.filter(user =>
      user.fullName.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
    );

    if (filteredUsers.length === 0) {
      resultsTable.innerHTML = '<tr><td colspan="4" class="text-center text-muted">No users found.</td></tr>';
      return;
    }

    filteredUsers.forEach(user => {
      const row = `
        <tr>
          <td><img src="${user.profilePic}" alt="Profile" class="rounded-circle" style="width: 50px;"></td>
          <td>${user.fullName}</td>
          <td>@${user.username}</td>
          <td>${user.bio}</td>
        </tr>`;
      resultsTable.innerHTML += row;
    });
  });
