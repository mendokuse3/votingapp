const stateData = [
	{
		name: 'Alabama',
		url:
			'https://www.alabamainteractive.org/sos/voter_registration/instructions.action',
		online: 'Monday, October 19, 2020',
		mailIn: 'Monday, October 19, 2020',
		inPerson: 'Monday, October 19, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Alaska',
		url:
			'https://voterregistration.alaska.gov/Registration/RegistrationDetails?haveValidAKDL=true',
		online: 'Sunday, October 4, 2020',
		mailIn: 'Sunday, October 4, 2020',
		inPerson: 'Sunday, October 4, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'American Samoa',
		url: 'https://aselectionoffice.gov/node/7',
		online: null,
		mailIn: null,
		inPerson: 'Monday, October 5, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Arizona',
		url: 'https://servicearizona.com/VoterRegistration/register?execution=e1s1',
		online: 'Monday, October 5, 2020',
		mailIn: 'Monday, October 5, 2020',
		inPerson: 'Monday, October 5, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Arkansas',
		url:
			'https://www.sos.arkansas.gov/elections/voter-information/voter-registration-information',
		online: null,
		mailIn: 'Monday, October 5, 2020',
		inPerson: 'Monday, October 5, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'California',
		url: 'https://covr.sos.ca.gov/',
		online: 'Monday, October 19, 2020',
		mailIn: 'Monday, October 19, 2020',
		inPerson: 'Tuesday, November 3, 2020',
		general: 'Tusday, November 3, 2020',
	},
	{
		name: 'Colorado',
		url:
			'https://www.sos.state.co.us/voter/pages/pub/olvr/verifyNewVoter.xhtml',
		online: 'Monday, October 26, 2020',
		mailIn: 'Monday, October 26, 2020',
		inPerson: 'Tuesday, November 3, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Connecticut',
		url: 'https://voterregistration.ct.gov/OLVR/prefix.do',
		online: 'Tuesday, October 27, 2020',
		mailIn: 'Tuesday, October 27, 2020',
		inPerson: 'Tuesday, November 3, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Delaware',
		url: 'https://ivote.de.gov/voterview/registrant/newregistrant',
		online: 'Saturday, October 10, 2020',
		mailIn: 'Saturday, October 10, 2020',
		inPerson: 'Saturday, October 10, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'DC',
		url: 'https://forms.dc.gov/f/DC_Voter_Registration_Form?ref=voteusa',
		online: null,
		mailIn: 'Tuesday, October 13, 2020',
		inPerson: 'Tuesday, November 3, 2020',
		general: null,
	},
	{
		name: 'Florida',
		url: 'https://registertovoteflorida.gov/eligibilityreactive',
		online: 'Monday, October 5, 2020',
		mailIn: 'Monday, October 5, 2020',
		inPerson: 'Monday, October 5, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Georgia',
		url: 'https://registertovote.sos.ga.gov/GAOLVR/welcometoga.do#no-back-button',
		online: 'Monday, October 5, 2020',
		mailIn: 'Monday, October 5, 2020',
		inPerson: 'Monday, October 5, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Guam',
		url: 'https://gec.guam.gov/register/?ref=voteusa',
		online: 'Tuesday, October 13, 2020',
		mailIn: 'Friday, October 23, 2020',
		inPerson: 'Friday, October 23, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Hawaii',
		url: 'https://olvr.hawaii.gov/register.aspx',
		online: 'Monday, October 5, 2020',
		mailIn: 'Must be received by Monday, October 5, 2020',
		inPerson: 'Tuesday, November 3, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Idaho',
		url: 'https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ApplicationInstructions.aspx?ref=voteusa',
		online: 'Friday, October 9, 2020',
		mailIn: 'Must be received by Friday, October 9, 2020',
		inPerson: 'Tuesday, November 3, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Illinois',
		url: 'https://ova.elections.il.gov/Step0.aspx',
		online: 'Sunday, October 18, 2020',
		mailIn: 'Must be received by Tuesday, October 6, 2020',
		inPerson: 'Tuesday, November 3, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Indiana',
		url: 'https://indianavoters.in.gov/?ref=voteusa',
		online: 'Monday, October 5, 2020',
		mailIn: 'Must be postmarked by Monday, October 5, 2020',
		inPerson: 'Monday, October 5, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Iowa',
		url:
			'https://mymvd.iowadot.gov/Account/Login?ReturnUrl=%2fVoterRegistration&?ref=voteusa',
		online: 'Saturday, October 24, 2020',
		mailIn: 'Must be received by Saturday, October 24, 2020',
		inPerson: 'Tuesday, November 3, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Kansas',
		url: 'https://www.kdor.ks.gov/Apps/VoterReg/secure/default.aspx',
		online: 'Tuesday, October 13, 2020',
		mailIn: 'Must be postmarked by Tuesday, October 13, 2020',
		inPerson: 'Tuesday, October 13, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Kentucky',
		url: 'https://vrsws.sos.ky.gov/ovrweb/?ref=voteusa',
		online: 'Monday, October 5, 2020',
		mailIn: 'Must be received by Monday, October 5, 2020',
		inPerson: 'Monday, October 5, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Louisiana',
		url: 'https://voterportal.sos.la.gov/VoterRegistration',
		online: 'Tuesday, October 13, 2020',
		mailIn: 'Must be postmarked by Monday, October 5, 2020',
		inPerson: 'Monday, October 5, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Maine',
		url: 'https://www.maine.gov/sos/cec/elec/voter-info/voterguide.html?ref=voteusa',
		online: null,
		mailIn: 'Must be received by Tuesday, October 13, 2020',
		inPerson: 'Tuesday, November 3, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Maryland',
		url: 'https://elections.maryland.gov/voter_registration/application.html',
		online: 'Tuesday, October 13, 2020',
		mailIn: 'Must be postmarked by Tuesday, October 13, 2020',
		inPerson: 'Tuesday, November 3, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Massachusetts',
		url: 'https://www.sec.state.ma.us/OVR/Pages/CheckEligibility.aspx?&Action=Register',
		online: 'Saturday, October 24, 2020',
		mailIn: 'Must be postmarked by Saturday, October 24, 2020',
		inPerson: 'Saturday, October 24, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Michigan',
		url: 'https://mvic.sos.state.mi.us/RegisterVoter',
		online: 'Monday, October 19, 2020',
		mailIn: 'Must be postmarked by Monday, October 19, 2020',
		inPerson: 'Tuesday, November 3, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Minnesota',
		url:
			'https://mnvotes.sos.state.mn.us/VoterRegistration/VoterRegistrationMain.aspx',
		online: 'Tuesday, October 13, 2020',
		mailIn: 'Must be received by Tuesday, October 13, 2020',
		inPerson: 'Tuesday, November 3, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Mississippi',
		url: 'https://www.vote.org/register-to-vote/mississippi/',
		online: null,
		mailIn: 'Must be postmarked by Monday, October 5, 2020',
		inPerson: 'Monday, October 5, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Missouri',
		url: 'https://s1.sos.mo.gov/elections/voterregistration',
		online: 'Wednesday, October 7, 2020',
		mailIn: 'Must be postmarked by Wednesday, October 7, 2020',
		inPerson: 'Wednesday, October 7, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Montana',
		url: 'https://www.vote.org/register-to-vote/montana/',
		online: null,
		mailIn: 'Must be postmarked by Monday, October 26, 2020',
		inPerson: 'Tuesday, November 3, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
		name: 'Nebraska',
		url: 'https://www.nebraska.gov/apps-sos-voter-registration/',
		online: 'Friday, October 16, 2020',
		mailIn: 'Must be postmarked by Friday, October 16, 2020',
		inPerson: 'Friday, October 23, 2020',
		general: 'Tuesday, November 3, 2020',
	},
	{
        name: 'Nevada',
        url: 'https://www.registertovotenv.gov/',
        online: 'Thursday, October 29, 2020',
        mailIn: 'Tuesday, October 6, 2020',
        inPerson: 'Tuesday, October 6, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'New Hampshire',
        url: 'https://sos.nh.gov/elections/voters/register-to-vote/town-or-city-clerk-s-office/',
        online: null,
        mailIn: null,
        inPerson: 'Tuesday, November 3, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'New Jersey',
        url: 'https://voter.svrs.nj.gov/register',
        online: null,
        mailIn: 'Tuesday, October 13, 2020',
        inPerson: 'Tuesday, October 13, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'New Mexico',
        url: 'https://portal.sos.state.nm.us/OVR/(S(r52ixg1k5n1bltkptf5mthpk))/WebPages/DomesticApplication.aspx?AspxAutoDetectCookieSupport=1',
        online: 'Tuesday, October 6, 2020',
        mailIn: 'Tuesday, October 6, 2020',
        inPerson: 'Saturday, October 31, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'New York',
        url: 'https://voterreg.dmv.ny.gov/MotorVoter/',
        online: 'Friday, October 9, 2020',
        mailIn: 'Friday, October 9, 2020',
        inPerson: 'Friday, October 9, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'North Carolina',
        url: 'https://payments.ncdot.gov/',
        online: 'Friday, October 9, 2020',
        mailIn: 'Friday, October 9, 2020',
        inPerson: 'Saturday, October 31, 2020',
        general: 'Tuesday, November 3, 220'
    },
    {
        name: 'North Dakota',
        url: 'https://howto.vote/register/en/nd.html',
        online: null,
        mailIn: null,
        inPerson: null,
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Northern Mariana Islands',
        url: 'https://www.votecnmi.gov.mp/?ref=voteusa',
        online: null,
        mailIn: null,
        inPerson: 'Friday, September 4, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Ohio',
        url: 'https://howto.vote/register/en/nd.html',
        online: 'Monday, October 5, 2020',
        mailIn: 'Monday, October 5, 2020',
        inPerson: 'Monday, October 5, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Oklahoma',
        url: 'https://www.ok.gov/elections/documents/Oklahoma%20Voter%20Registration%20Application%20form%20v4-20%20SEB%20web.pdf',
        online: null,
        mailIn: 'Friday, October 9, 2020',
        inPerson: 'Friday, October 9, 202',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Oregon',
        url: 'https://sos.oregon.gov/voting/Pages/registration.aspx?lang=en',
        online: 'Tuesday, October 13, 2020',
        mailIn: 'Tuesday, October 13, 2020',
        inPerson: 'Tuesday, October 13, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Pennsylvania',
        url: 'https://www.pavoterservices.pa.gov/Pages/VoterRegistrationApplication.aspx',
        online: 'Monday, October 19, 2020',
        mailIn: 'Monday, October 19, 2020',
        inPerson: 'Monday, October 19, 2020',
        general: 'Tuesday, November 9, 2020'
    },
    {
        name: 'Rhode Island',
        url: 'https://vote.sos.ri.gov/Home/RegistertoVote?ActiveFlag=1',
        online: 'Sunday, October 4, 2020',
        mailIn: 'Sunday, October 4, 2020',
        inPerson: 'Sunday, October 4, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'South Carolina',
        url: 'https://info.scvotes.sc.gov/eng/ovr/start.aspx',
        online: 'Sunday, October 4, 2020',
        mailIn: 'Monday, October 5, 2020',
        inPerson: 'Friday, October 2, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'South Dakota',
        url: 'https://www.vote.org/register-to-vote/south-dakota/',
        online: null,
        mailIn: 'Monday, October 19, 2020',
        inPerson: 'Monday, October 19, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Tennessee',
        url: 'https://ovr.govote.tn.gov/',
        online: 'Monday, October 5, 2020',
        mailIn: 'Monday, October 5, 2020',
        inPerson: 'Monday, October 5, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Texas',
        url: 'https://www.sos.state.tx.us/elections/forms/vr-with-receipt.pdf',
        online: null,
        mailIn: 'Monday, October 5, 2020',
        inPerson: 'Monday, October 5, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Utah',
        url: 'https://secure.utah.gov/voterreg/index.html',
        online: 'Friday, October 23, 2020',
        mailIn: 'Friday, October 23, 2020',
        inPerson: 'Tuesday, November 3, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'US Virgin Islands',
        url: 'https://www.vivote.gov/voters/register-vote?ref=voteusa',
        online: null,
        mailIn: null,
        inPerson: 'Sunday, October 4, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Vermont',
        url: 'https://olvr.vermont.gov/',
        online: 'Friday, October 30, 2020',
        mailIn: 'Friday, October 30, 2020',
        inPerson: 'Tuesday, November 3, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Virginia',
        url: 'https://vote.elections.virginia.gov/Registration/DmvLookup',
        online: 'Tuesday, October 13, 2020',
        mailIn: 'Tuesday, October 13, 2020',
        inPerson: 'Tuesday, October 13, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Washington',
        url: 'https://olvr.votewa.gov/VoterIdentification.aspx',
        online: 'Monday, October 13, 2020',
        mailIn: 'Monday, October 26, 2020',
        inPerson: 'Tuesday, November 3, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'West Virginia',
        url: 'https://ovr.sos.wv.gov/Register/Landing#Qualifications',
        online: 'Tuesday, October 13, 2020',
        mailIn: 'Tuesday, October 13, 2020',
        inPerson: 'Tuesday, October 13, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Wisconsin',
        url: 'https://myvote.wi.gov/en-us/RegisterToVote',
        online: 'Wednesday, October 14, 2020',
        mailIn: 'Wednesday, October 14, 2020',
        inPerson: 'Tuesday, November 3, 2020',
        general: 'Tuesday, November 3, 2020'
    },
    {
        name: 'Wyoming',
        url: 'https://sos.wyo.gov/Forms/Elections/General/VoterRegistrationForm.pdf',
        online: null,
        mailIn: 'Monday, October 19, 2020',
        inPerson: 'Tuesday, November 3, 2020',
        general: 'Tuesday, November 3, 2020'
    }
];


export default stateData;
