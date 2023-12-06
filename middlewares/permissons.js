exports.isLogin = (req, res, next) => {
    if (req?.user && req?.user?.isActive) next();
    else {
      res.errorStatusCode = 403;
      throw new Error("No Permission: Must login first.");
    }
  };

  exports.isStaff = (req, res, next) => {
    if (req?.user && req?.user?.isActive && req?.user?.isStaff) next();
    else {
      res.errorStatusCode = 403;
      throw new Error("No Permission: You need to be Staff");
    }
  };
  
  exports.isAdmin = (req, res, next) => {
    if (req?.user && req?.user?.isActive && req?.user?.isAdmin) next();
    else {
      res.errorStatusCode = 403;
      throw new Error("No Permission: Only admins can perform this task");
    }
  };
  