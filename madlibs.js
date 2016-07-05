var adjective = ['abandoned', 'able', 'absolute', 'adorable', 'adventurous', 'academic', 'acceptable', 'acclaimed', 'accomplished', 'accurate', 'aching', 'acidic', 'acrobatic', 'active', 'actual', 'adept', 'admirable', 'admired', 'adolescent', 'adorable', 'adored', 'advanced', 'afraid', 'affectionate', 'aged', 'aggravating', 'aggressive', 'agile', 'agitated', 'agonizing', 'agreeable', 'ajar', 'alarmed', 'alarming', 'alert', 'alienated', 'alive', 'all', 'altruistic']
var noun = ['account', 'achiever', 'acoustics', 'act', 'action', 'activity', 'actor', 'addition', 'adjustment', 'advertisement', 'advice', 'aftermath', 'afternoon', 'afterthought', 'agreement', 'air', 'airplane', 'airport', 'alarm', 'amount', 'amusement', 'anger', 'angle', 'animal ', 'answer', 'ant', 'ants ', 'apparatus', 'apparel', 'apple', 'apples ', 'appliance', 'approval', 'arch', 'argument', 'arithmetic', 'arm', 'army', 'art', 'attack', 'attempt', 'attention', 'attraction', 'aunt', 'authority']
var person = ['Sophia', 'Emma', 'Olivia', 'Isabella', 'Ava', 'Lily', 'Zoe', 'Chloe', 'Mia', 'Madison', 'Emily', 'Ella', 'Madelyn', 'Abigail', 'Aubrey', 'Addison', 'Avery', 'Layla', 'Hailey', 'Amelia', 'Hannah', 'Charlotte', 'Kaitlyn', 'Harper', 'Kaylee', 'Sophie', 'Mackenzie', 'Peyton', 'Riley', 'Grace', 'Brooklyn', 'Sarah', 'Aaliyah', 'Anna', 'Arianna', 'Ellie', 'Natalie', 'Isabelle', 'Lillian', 'Evelyn', 'Elizabeth', 'Lyla', 'Lucy', 'Claire', 'Makayla', 'Kylie', 'Audrey', 'Maya', 'Leah', 'Gabriella']
var place = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Belgium', 'Bosnia', 'and', 'Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech', 'Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kazakhstan', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'San', 'Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom']
var vehicle = ['aerosani', 'airship', 'all-terrain vehicle', 'amphibious all-terrain vehicle', 'amphibious vehicle', 'autogyro', 'automobile', 'auto rickshaw', 'balloon', 'bathyscaphe', 'bicycle', 'blimp', 'boat', 'bus', 'cable car', 'canoe', 'bus', 'cycle rickshaw', 'dandy horse', 'deep Submergence Vehicle', 'diving bell', 'diving chamber', 'dog sled', 'draisine', 'electric vehicle', 'fdixed-wing aircraft', 'golf cart', 'ground effect vehicle', 'glider aircraft', 'handcar', 'hang glider', 'hopper', 'helicopter', 'hovercraft', 'hydrofoil', 'jet aircraft', 'jet pack', 'kayak', 'land yacht', 'launch escape capsule', 'locomotive', 'maglev', 'minibus', 'minivan', 'monorail', 'monowheel', 'moped', 'motorcycle', 'ornithopter', 'passenger car', 'rickshaw', 'pedalo', 'pogo Stick', 'powered parachute', 'quadracycle', 'race car', 'road train', 'rocket', 'rocket sled', 'rover', 'sailboat', 'scooter (motorcycle)', 'screw-propelled vehicle', 'sea tractor', 'segway', 'ship', 'single-track vehicle', 'skateboard', 'skis', 'sled', 'snowboard', 'snowmobile', 'space Hopper', 'sports car', 'steam car', 'submarine', 'submersible', 'surfboard', 'suv', 'tank', 'tractor', 'traction engine', 'train', 'tram', 'tricycle', 'trolleybus', 'truck', 'unicycle', 'unmanned aerial vehicle', 'van', 'velocipede', 'velomobile', 'wagon', 'wheelbarrow', 'wingpack', 'yacht', 'zipline']
var verb = ['accept', 'ache', 'acknowledge', 'act', 'add', 'admire', 'admit', 'admonish', 'advise', 'adopt', 'affirm', 'afford', 'agree', 'ail', 'alert', 'allege', 'allow', 'allude', 'amuse', 'analyze', 'announce', 'annoy', 'answer', 'apologize', 'appeal', 'appear', 'applaud', 'appreciate', 'approve', 'argue', 'arrange', 'arrest', 'arrive', 'articulate', 'ask', 'assert', 'assure', 'attach', 'attack', 'attempt', 'attend', 'attract', 'auction', 'avoid', 'avow', 'awake']

function arrayPosition(typeOfWord) {
  var index = Math.floor(Math.random() * (typeOfWord.length - 1));
  return typeOfWord[index]
}

console.log(
  'Once upon a time there was an '
  + arrayPosition(adjective)
  + ' '
  + arrayPosition(noun)
  + '. It was really '
  + arrayPosition(adjective)
  + '. It liked to '
  + arrayPosition(verb)
  + ' all day. One day, it went to '
  + arrayPosition(place)
  + ' to meet '
  + arrayPosition(person)
  + '. To get there, it rode in a '
  + arrayPosition(vehicle)
  + ', but on the way there, the '
  + arrayPosition(vehicle)
  + ' crashed.  It had to walk the rest of the way.'
);
