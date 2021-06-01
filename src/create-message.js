const createMessage = (center) => {
  return `Hospital :${center.name}
PinCode :${center.pin}
Address :${center.addr}
    ${center.sessions.map((session) => {
      return `Date: ${session.date}
      Dose 1 :${session.slots_dose_1}
      Dose 2 :${session.slots_dose_2}
      Age :${session.ageLimit}
      Vaccine :${session.vaccine}`
    })}
      Fee : ${center.feeType}
   `;
};

module.exports = createMessage;


