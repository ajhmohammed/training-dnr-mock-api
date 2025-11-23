const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5858;

app.use(cors());

// Dummy people data
const people = [
  {
    data: {
      nic: "A238191",
      name_first: "Ibrahim",
      name_middle: "Rasheed",
      name_last: "Latheef",
      name_common: "Rasheed",
      name_full: "Ibrahim Rasheed Latheef",
      sex: "m",
      date_of_birth: "1990-08-15T00:00:00",
      address_home_name: "Fehimagu",
      address_island_name: "Hithadhoo",
      address_atoll_name: "Seenu"
    }
  },
  {
    data: {
      nic: "A187450",
      name_first: "Fathimath",
      name_middle: "Layaal",
      name_last: "Hassan",
      name_common: "Layaal",
      name_full: "Fathimath Layaal Hassan",
      sex: "f",
      date_of_birth: "1995-12-23T00:00:00",
      address_home_name: "Dhiguge",
      address_island_name: "Thinadhoo",
      address_atoll_name: "Gaafu Dhaalu"
    }
  },
  {
    data: {
      nic: "A402981",
      name_first: "Ahmed",
      name_middle: "Zayan",
      name_last: "Mohamed",
      name_common: "Zayan",
      name_full: "Ahmed Zayan Mohamed",
      sex: "m",
      date_of_birth: "1982-06-07T00:00:00",
      address_home_name: "Rehendhi",
      address_island_name: "Kulhudhuffushi",
      address_atoll_name: "Haa Dhaalu"
    }
  }
];

// Only allow search if both NIC and name are provided
app.get('/search', (req, res) => {
  const { nic, name } = req.query;

  if (!nic || !name) {
    return res.status(400).json({
      error: "Both 'nic' and 'name' query parameters are required."
    });
  }

  const match = people.find(person => {
    const d = person.data;
    const nicMatch = d.nic.toLowerCase() === nic.toLowerCase();
    const nameMatch = [d.name_first, d.name_middle, d.name_last, d.name_common, d.name_full]
      .some(n => n.toLowerCase().includes(name.toLowerCase()));
    return nicMatch && nameMatch;
  });

  if (!match) {
    return res.status(404).json({
      error: "No matching record found."
    });
  }

  res.json(match);
});

app.listen(PORT, () => {
  console.log(`Mock API server running at http://localhost:${PORT}`);
});
