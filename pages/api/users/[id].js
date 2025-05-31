export default function handler(req, res) {
  const { id } = req.query;
  const users = {
       '1': {
    id: '1',
    name: 'Yatish Patil',
    email: 'patilya4321@gmail.com',
    contactNumber: '7710957578',
    address: 'Vasai, Maharashtra',
    age: 24,
    department: 'IT',
    description: 'Passionate about full stack development and cloud technologies.'
  },
  '2': {
    id: '2',
    name: 'Ravi Kumar',
    email: 'ravi.kumar@gmail.com',
    contactNumber: '9876543210',
    address: 'Bangalore, Karnataka',
    age: 29,
    department: 'HR',
    description: 'Experienced HR manager focusing on talent acquisition and employee engagement.'
  },
  '3': {
    id: '3',
    name: 'Sneha Shah',
    email: 'sneha.shah@gmail.com',
    contactNumber: '8765432109',
    address: 'Ahmedabad, Gujarat',
    age: 26,
    department: 'Finance',
    description: 'Financial analyst with expertise in budgeting and forecasting.'
  },
  '4': {
    id: '4',
    name: 'Priya Mehta',
    email: 'priya.mehta@gmail.com',
    contactNumber: '9812345678',
    address: 'Mumbai, Maharashtra',
    age: 28,
    department: 'Marketing',
    description: 'Creative marketer specializing in digital campaigns and brand strategy.'
  },
  '5': {
    id: '5',
    name: 'Amit Sharma',
    email: 'amit.sharma@gmail.com',
    contactNumber: '9123456780',
    address: 'Delhi, India',
    age: 31,
    department: 'Operations',
    description: 'Operations manager with a knack for optimizing processes and workflows.'
  },
  '6': {
    id: '6',
    name: 'Neha Verma',
    email: 'neha.verma@gmail.com',
    contactNumber: '9223344556',
    address: 'Pune, Maharashtra',
    age: 25,
    department: 'IT',
    description: 'Frontend developer passionate about UI/UX design and responsive layouts.'
  },
  '7': {
    id: '7',
    name: 'Vikram Joshi',
    email: 'vikram.joshi@gmail.com',
    contactNumber: '9332211000',
    address: 'Nagpur, Maharashtra',
    age: 27,
    department: 'Sales',
    description: 'Sales executive focused on customer satisfaction and revenue growth.'
  },
  '8': {
    id: '8',
    name: 'Divya Singh',
    email: 'divya.singh@gmail.com',
    contactNumber: '9445566778',
    address: 'Jaipur, Rajasthan',
    age: 23,
    department: 'HR',
    description: 'HR coordinator dedicated to employee welfare and recruitment.'
  },
  '9': {
    id: '9',
    name: 'Rohit Das',
    email: 'rohit.das@gmail.com',
    contactNumber: '9556677889',
    address: 'Kolkata, West Bengal',
    age: 30,
    department: 'Finance',
    description: 'Accountant skilled in tax planning and financial compliance.'
  },
  '10': {
    id: '10',
    name: 'Anjali Nair',
    email: 'anjali.nair@gmail.com',
    contactNumber: '9667788990',
    address: 'Kochi, Kerala',
    age: 26,
    department: 'Marketing',
    description: 'Digital marketing specialist with expertise in SEO and content creation.'
  }
 };

  const user = users[id];
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
}