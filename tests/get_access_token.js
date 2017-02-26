var request = require('request');
var headers = { 'Host': 'localhost',
                'Authorization': "Basic ODllOGUyOWMtMTRhMy00MDkwLTk4ZGItNTdiMjVjNTcwNmVmOmUyM2U1NzFlLTIwMmM="
              };
var data = {
  UserName : "admin",
  Password : "123456"
};

request.post({ url: "http://localhost:60444/api/v1/Token/Get", form :data, headers: headers }, function (e, r, body) {
    console.log(body);
});

/*
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIyIiwidXNlcm5hbWUiOiJhZG1pbiIsInVzZXJmaXJzdG5hbWUiOiJHw7Zrw6dlIiwidXNlcmxhc3RuYW1lIjoiR8OWTkVOIiwidXNlcnJvbGUiOiJBZG1pbmlzdHJhdG9ycyIsImFzc29jaWF0ZWRCcmFuY2giOlsiMSIsIjIiLCIzIl0sIm5iZiI6MTQ4Nzc3MjgxNiwiZXhwIjoxNDg3ODU5MjE2LCJpYXQiOjE0ODc3NzI4MTYsImlzcyI6IkdhRml0Qm9keSIsImF1ZCI6IkdhRml0Qm9keSBVc2VycyJ9._1TlX-q6LSox6mNuhiqOHVaWCKTvgAUAt9qka6iVDMs",
  "expires_in": 86399,
  "token_type": "Bearer"
}
*/
