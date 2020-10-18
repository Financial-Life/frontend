import * as actions from "../constants/actions";

const initialState = {
  id: null,
  profiles: [
    {
      profileId: 1,
      name: "Ernesto",
      age: 25,
      occupation: "Programador",
      variableIncome: 1000,
      fixedIncome: 0,
      variableExpenses: 600,
      fixedExpenses: 0,
      goalName: "Carro",
      goalAmount: 1000,
    },
    {
      profileId: 2,
      name: "Mario",
      age: 28,
      occupation: "Taquero",
      variableIncome: 2000,
      fixedIncome: 0,
      variableExpenses: 1900,
      fixedExpenses: 0,
      goalName: "Viaje a Cacahuamilpa",
      goalAmount: 10000,
    },
    {
      profileId: 3,
      name: "Silvia",
      age: 25,
      occupation: "Programadora",
      variableIncome: 1000,
      fixedIncome: 0,
      variableExpenses: 600,
      fixedExpenses: 0,
      goalName: "Carrito de hot-dogs",
      goalAmount: 1000,
    },
  ]
};


const onboarding = (state = initialState, action) => {
  switch (action.type) {
    case actions.SELECT_PROFILE:
      return {
        ...state,
        id: action.profileId,
      };
    default:
      return state;
  }
};

export default onboarding;
