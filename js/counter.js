 const customersServed = document.getElementById('customers-served');
  const roomsAvailable = document.getElementById('rooms-available');
  const happyCustomers = document.getElementById('happy-customers');
  const professionalStaffs = document.getElementById('professional-staffs');

  let countCustomersServed = 0;
  let countRoomsAvailable = 0;
  let countHappyCustomers = 0;
  let countProfessionalStaffs = 0;

  const intervalId = setInterval(() => {
    // increment the counters
    countCustomersServed += 200;
    countRoomsAvailable += 3;
    countHappyCustomers += 20;
    countProfessionalStaffs += 5;

    // update the counter elements
    customersServed.innerText = (countCustomersServed < 1000 ? countCustomersServed.toString() + '+' : '1000+');
    roomsAvailable.innerText = (countRoomsAvailable < 18 ? countRoomsAvailable.toString() + '+' : '15+');
    happyCustomers.innerText = (countHappyCustomers < 98.9 ? countHappyCustomers.toFixed(1) + '%' : '98.9%');
    professionalStaffs.innerText = (countProfessionalStaffs < 25 ? countProfessionalStaffs.toString() + '+' : '25+');

    // check if all counters have reached their final values and stop the countdown
    if (countCustomersServed >= 1000 && countRoomsAvailable >= 18 && countHappyCustomers >= 98.9 && countProfessionalStaffs >= 25) {
      clearInterval(intervalId);
    }
  }, 1000);
