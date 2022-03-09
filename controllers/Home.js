const getAllHomes = (req, res) => {
  res.send('Get request on /Home getAllHomes');
};
  
const getHome = (req, res) => {
  res.send('Get request on /Home getHome');
};
  
const createHome = (req, res) => {
  res.send('Post request on /Home createHome');
};
  
const updateHome = (req, res) => {
  res.send('Patch request on /Home updateHome');
};
  
const deleteHome = (req, res) => {
  res.send('Get request on /Home deleteHome');
};
  
module.exports = {
  getHome,
  createHome,
  updateHome,
  deleteHome,
  getAllHomes,
};