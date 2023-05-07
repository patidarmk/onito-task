import { rest } from "msw";

const data = [
  {
    id: 1,
    name: "Mukesh",
    dob: "23",
    gender: "Male",
    mobile: "9192939495",
    govIdType: "aadhar",
    govIdValue: "12345678",
    email: "patidarmukesh123@gmail.com",
    guardianLabel: "Mother",
    guardianName: "Jamna Devi",
    emrgencyContactNo: "9192939495",
    address: "Hinjewadi",
    state: "Maharastra",
    city: "Pune",
    country: "India",
    occupation: "Job",
    religion: "Hindu",
    maritalStatus: "Single",
    bloodGroup: "B+",
    nationality: "Indian"
  }
];

const handlers = [
  rest.get("/data", (req, res, ctx) => {
    return res(ctx.json(data));
  }),

  rest.post("/data/posts", (req, res, ctx) => {
    console.log(req.body);
    data.push(req.body);
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  })
];

export default handlers;
