var _id = 100000;

var _persons = [
	{
		"id": 13457,
		"firstName": "John",
		"lastName": "Smith",
		"age": 25,
		"address": {
			"streetAddress": "21 2nd Street",
			"city": "New York",
			"state": "NY",
			"postalCode": "10021"
		},
		"phoneNumber": [
			{
				"type": "home",
				"number": "212 555-1234"
			},
			{
				"type": "fax",
				"number": "646 555-4567"
			}
		]
	},
	{
		"id": 76578,
		"firstName": "Simona",
		"lastName": "Morasca",
		"age": 22,
		"address": {
			"streetAddress": "3 Mcauley Dr",
			"city": "Ashland",
			"state": "OH",
			"postalCode": "44805"
		},
		"phoneNumber": [
			{
				"type": "home",
				"number": "419-503-2484"
			},
			{
				"type": "fax",
				"number": "419-800-6759"
			}
		]
	},
	{
		"id": 12583,
		"firstName": "Josephine",
		"lastName": "Darakjy",
		"age": 33,
		"address": {
			"streetAddress": "4 B Blue Ridge Blvd",
			"city": "Brighton",
			"state": "MI",
			"postalCode": "48116"
		},
		"phoneNumber": [
			{
				"type": "home",
				"number": "973-605-6492"
			},
			{
				"type": "fax",
				"number": "602-919-4211"
			}
		]
	}
];

function getPersons(){
	return _persons;
}

function updatePerson(personId, data){
	var id = parseInt(personId, 10);
	for(var i = 0; i < _persons.length; i++){
		if(_persons[i].id === id){
			_persons[i] = data;
			return _persons;
		}
	}
	return false;
}

function deletePerson(personId){
	var id = parseInt(personId, 10);
	for(var i = 0; i < _persons.length; i++){
		if(_persons[i].id === id){
			_persons.splice(i, 1);
			return _persons;
		}
	}
	return false;
}

function addPerson(person){
	person.person.id = _id++;
	_persons.push(person.person);
	return _persons;
}

exports.getPersons = getPersons;
exports.updatePerson = updatePerson;
exports.deletePerson = deletePerson;
exports.addPerson = addPerson;