import { loginUserActionCreator, userReducer } from "./usersSlice";

describe("Given a user slice", () => {
  describe("When it receives an action of the user to log in", () => {
    test("Then it should return the isLogged property set as true", () => {
      const unloggedUser = {
        id: "",
        isLogged: false,
        token: "",
        username: "",
      };

      const loggedUser = {
        id: "",
        isLogged: true,
        token: "",
        username: "",
      };

      const loginUser = loginUserActionCreator(loggedUser);

      const expectedResult = userReducer(unloggedUser, loginUser);

      expect(expectedResult).toStrictEqual(loggedUser);
    });
  });
});
