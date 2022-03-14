export const getTest = (req: any, res: any) => {
  console.log(req.session);
  req.session.isAuth = true;
  res.sendStatus(200);
};
