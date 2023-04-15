const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const data = [
    req.body.fullName,
    req.body.emailAddress,
    req.body.phoneNumber,
    req.body.emailSubject,
    req.body.message.replace(/(\r\n|\n|\r)/gm, " "),
  ].join(',');

  const fileName = 'messages.csv';
  const filePath = `uploads/${fileName}`;

  // Check if the file exists, and if not, create it with headers
  if (!fs.existsSync(filePath)) {
    try {
      const headers = [
        "Full Name",
        "Email Address",
        "Phone Number",
        "Email Subject",
        "Message",
      ].join(',');
      fs.writeFileSync(filePath, headers + '\n');
    } catch (err) {
      console.error("Error creating the file:", err);
      return res.status(500).send('An error occurred while creating the CSV file. Please try again.');
    }
  }

  // Append the new message to the existing file using a writable stream
  const stream = fs.createWriteStream(filePath, { flags: 'a' });
  stream.write(data + '\n', (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
      return res.status(500).send('An error occurred while saving the message. Please try again.');
    }
    stream.end(() => {
      res.status(200).send('Message saved to CSV file!');
    });
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
