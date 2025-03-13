const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, req, next).catch(next);
  };
};

module.exports = catchAsync;
