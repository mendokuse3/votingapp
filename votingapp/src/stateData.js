const stateData = [
    {
        name: 'Alabama',
        url: 'https://www.alabamainteractive.org/sos/voter_registration/instructions.action'
    },
    {
        name: 'Alaska',
        url: 'https://voterregistration.alaska.gov/Registration/RegistrationDetails?haveValidAKDL=true'
    },
    {
        name: 'Arizona',
        url: 'https://servicearizona.com/VoterRegistration/register?execution=e1s1'
    },
    {
        name: 'Arkansas',
        url: 'https://www.sos.arkansas.gov/elections/voter-information/voter-registration-information'
    },
    {
        name: 'California',
        url: 'https://covr.sos.ca.gov/'
    },
    {
        name: 'Colorado',
        url: 'https://www.sos.state.co.us/voter/pages/pub/olvr/verifyNewVoter.xhtml'
    },
    {
        name: 'Connecticut',
        url: 'https://voterregistration.ct.gov/OLVR/prefix.do'
    },
    {
        name: 'Delaware',
        url: 'https://ivote.de.gov/voterview/registrant/newregistrant'
    }, 
    {
        name: 'Florida',
        url: 'https://registertovoteflorida.gov/eligibilityreactive'
    },
    {
        name: 'Georgia',
        url: 'https://registertovote.sos.ga.gov/GAOLVR/welcometoga.do#no-back-button'
    },
    {
        name: 'Hawaii',
        url: 'https://olvr.hawaii.gov/register.aspx'
    },
    {
        name: 'Idaho',
        url: 'https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ApplicationInstructions.aspx?ref=voteusa'
    },
    {
        name: 'Illinois',
        url: 'https://ova.elections.il.gov/Step0.aspx'
    },
    {
        name: 'Indiana',
        url: 'https://indianavoters.in.gov/?ref=voteusa'
    },
    {
        name: 'Iowa',
        url: 'https://mymvd.iowadot.gov/Account/Login?ReturnUrl=%2fVoterRegistration&?ref=voteusa'
    },
    {
        name: 'Kansas',
        url: 'https://www.kdor.ks.gov/Apps/VoterReg/secure/default.aspx'
    },
    {
        name: 'Kentucky',
        url: 'https://vrsws.sos.ky.gov/ovrweb/?ref=voteusa'
    },
    {
        name: 'Louisiana',
        url: 'https://voterportal.sos.la.gov/VoterRegistration'
    },
    {
        name: 'Maine',
        url: 'https://www.maine.gov/sos/cec/elec/voter-info/voterguide.html?ref=voteusa'
    },
    {
        name: 'Maryland',
        url: 'https://elections.maryland.gov/voter_registration/application.html'
    },
    {
        name: 'Massachusetts',
        url: 'https://www.sec.state.ma.us/OVR/Pages/CheckEligibility.aspx?&Action=Register'
    },
    {
        name: 'Michigan',
        url: 'https://mvic.sos.state.mi.us/RegisterVoter'
    },
    {
        name: 'Minnesota',
        url: 'https://mnvotes.sos.state.mn.us/VoterRegistration/VoterRegistrationMain.aspx'
    },
    {
        name: 'Mississippi',
        url: 'https://www.vote.org/register-to-vote/mississippi/'
    },
    {
        name: 'Missouri',
        url: 'https://s1.sos.mo.gov/elections/voterregistration'
    },
    {
        name: 'Montana',
        url: 'https://www.vote.org/register-to-vote/montana/'
    },
    {
        name: 'Nebraska',
        url: 'https://www.nebraska.gov/apps-sos-voter-registration/'
    },
    {
        name: 'Nevada',
        url: 'https://www.registertovotenv.gov/'
    },
    {
        name: 'New Hampshire',
        url: 'https://sos.nh.gov/elections/voters/register-to-vote/town-or-city-clerk-s-office/'
    },
    {
        name: 'New Jersey',
        url: 'https://voter.svrs.nj.gov/register'
    },
    {
        name: 'New Mexico',
        url: 'https://portal.sos.state.nm.us/OVR/(S(r52ixg1k5n1bltkptf5mthpk))/WebPages/DomesticApplication.aspx?AspxAutoDetectCookieSupport=1'
    },
    {
        name: 'New York',
        url: 'https://voterreg.dmv.ny.gov/MotorVoter/'
    },
    {
        name: 'North Carolina',
        url: 'https://payments.ncdot.gov/'
    },
    {
        name: 'North Dakota',
        url: 'https://howto.vote/register/en/nd.html'
    },
    {
        name: 'Ohio',
        url: 'https://howto.vote/register/en/nd.html'
    },
    {
        name: 'Oklahoma',
        url: 'https://www.ok.gov/elections/documents/Oklahoma%20Voter%20Registration%20Application%20form%20v4-20%20SEB%20web.pdf'
    },
    {
        name: 'Oregon',
        url: 'https://sos.oregon.gov/voting/Pages/registration.aspx?lang=en'
    },
    {
        name: 'Pennsylvania',
        url: 'https://www.pavoterservices.pa.gov/Pages/VoterRegistrationApplication.aspx'
    },
    {
        name: 'Rhode Island',
        url: 'https://vote.sos.ri.gov/Home/RegistertoVote?ActiveFlag=1'
    },
    {
        name: 'South Carolina',
        url: 'https://info.scvotes.sc.gov/eng/ovr/start.aspx'
    },
    {
        name: 'South Dakota',
        url: 'https://www.vote.org/register-to-vote/south-dakota/'
    },
    {
        name: 'Tennessee',
        url: 'https://ovr.govote.tn.gov/'
    },
    {
        name: 'Texas',
        url: 'https://www.sos.state.tx.us/elections/forms/vr-with-receipt.pdf'
    },
    {
        name: 'Utah',
        url: 'https://secure.utah.gov/voterreg/index.html'
    },
    {
        name: 'Vermont',
        url: 'https://olvr.vermont.gov/'
    },
    {
        name: 'Virginia',
        url: 'https://vote.elections.virginia.gov/Registration/DmvLookup'
    },
    {
        name: 'Washington',
        url: 'https://olvr.votewa.gov/VoterIdentification.aspx'
    },
    {
        name: 'West Virginia',
        url: 'https://ovr.sos.wv.gov/Register/Landing#Qualifications'
    },
    {
        name: 'Wisconsin',
        url: 'https://myvote.wi.gov/en-us/RegisterToVote'
    },
    {
        name: 'Wyoming',
        url: 'https://sos.wyo.gov/Forms/Elections/General/VoterRegistrationForm.pdf'
    }
]

export default stateData;



