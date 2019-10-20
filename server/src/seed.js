const mongoose = require('mongoose');

const UserModel = require('./models/user');
const CafeModel = require('./models/cafe');

(async function() {
  mongoose.connect('mongodb://localhost:27017/bookclub', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const users = [
    {
      name: 'Mario',
      pic: 'https://rmwc.io/images/avatars/ironman.png',
      cafesIds: []
    }
  ];

  const cafes = [
    {
      membersCount: 1,
      meetupsCount: 23,
      name: 'Le petit café',
      type: 'LOCAL',
      city: 'Nantes',
      pic: '/xl_club-lecture.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tortor id libero ullamcorper sollicitudin sit amet vel nulla. Nulla non tincidunt ligula, vitae molestie tortor. Aliquam at hendrerit nisl. Morbi volutpat turpis et eros laoreet congue. Sed vulputate lacus nec luctus sagittis. Vivamus nisi purus, imperdiet sed tempor mollis, gravida at ligula. Nunc sapien elit, rhoncus ac congue id, pretium vel augue. Pellentesque feugiat laoreet ipsum vitae tempor. Quisque egestas sem odio, ac hendrerit arcu sollicitudin quis. Suspendisse pulvinar, ligula sit amet consectetur porttitor, massa diam tempus massa, ut elementum ligula leo at quam. '
    }
  ];

  await CafeModel.deleteMany({});
  await UserModel.deleteMany({});

  const savedCafes = await CafeModel.insertMany(cafes);
  const cafeIds = savedCafes.map(c => c._id);
  const usersWithCafe = users.map(u => Object.assign({}, u, { cafeIds }));
  await UserModel.insertMany(usersWithCafe);
  mongoose.disconnect();
})();