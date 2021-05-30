const WAITING_TIME = 1000

//const MINIMUM_AGE_LIMIT = 18

// const isEligiblse = ssion.min_age_limit < MINIMUM_AGE_LIMIT

function sleep() {
    return new Promise((resolve) => {
        setTimeout(resolve, WAITING_TIME);
    });
}

const getDate = () => {
    const currentDate = new Date()
    const DateString = `${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}` 
    return DateString;
}

const formatSessions = ( sessions ) => {
    const condensedSessions = []
    for (const session of sessions) {
        if(session.available_capacity > 0 ){
            const newSession = {
                date: session.date,
                slots_dose_1: session.available_capacity_dose1,
                slots_dose_2: session.available_capacity_dose2,
                ageLimit: session.min_age_limit,
                vaccine: session.vaccine
            }
            condensedSessions.push(newSession)
        }
    }
    return condensedSessions
}

const formatSlotCenters = (data) => {
    const slots = []
    for (const center of data.centers) {
        const formattedSession = formatSessions(center.sessions)
            const newCenter = {
                id: center.center_id,
                name: center.name,
                addr: center.address,
                pin: center.pincode,
                sessions: formattedSession,
                available : formattedSession.length > 0 ? formatSessions.length : false,
                feeType: center.fee_type
            }
            slots.push(newCenter)
    }   
    return slots
}

module.exports = {
    sleep,
    getDate,
    formatSlotCenters
}