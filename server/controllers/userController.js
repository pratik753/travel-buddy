const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
      console.log('1-> ' + newObj[el] + ' 2->' + obj[el] + ' 3->' + el + '\n');
    }
  });
  console.log(newObj);
  return newObj;
};
exports.getAllUsers = catchAsync(async (req, res) => {
  //const users = await User.find({ active: { $ne: false } });
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});
exports.postUsers = (req, res) => {
  res.status(500).json({
    status: 'success',
    message: 'error file...',
  });
};
exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs passworddata
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This is not for password update. Please use /updateMyPassword.',
        400
      )
    );
  }
  // 2) Update user Document
  const filteredBody = filterObj(req.body, 'name', 'email');
  const updateUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'success',
    data: {
      user: updateUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'success',
    message: 'error file...',
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'success',
    message: 'error file...',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'success',
    message: 'error file...',
  });
};
