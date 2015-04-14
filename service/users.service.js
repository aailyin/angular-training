var persons = [
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
	return persons;
}

function updatePerson(data){
	for(var i = 0; i < persons.length; i++){
		if(persons[i].id === data.id){
			persons[i] = data;
			return true;
		}
	}
	return false;
}

function deletePerson(personId){
	var id = parseInt(personId, 10);
	for(var i = 0; i < persons.length; i++){
		if(persons[i].id === id){
			persons.splice(i, 1);
			return persons;
		}
	}
	return false;
}

exports.getPersons = getPersons;
exports.updatePerson = updatePerson;
exports.deletePerson = deletePerson;