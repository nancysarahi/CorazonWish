import KidModel from "../models/KidModel";

export function list(request, response) {
    KidModel.find({}).exec()
        .then(kids => {
            return response.json(kids);
        });
}

// export function show(request, response) {
//     let kidId = request.params.id;
//     let singleKid = kids.find(function (kid) {
//         return kidId === kid._id;
//     });
//     return response.json(singleKid);
// }

export function create(request, response) {
    const kid = new KidModel({
        name: request.body.name,
        age: request.body.age,
        parentsNames: request.body.parentsNames,
        siblingsInfo: request.body.siblingsInfo,
        favCharacter: request.body.favCharacter,
        arrivalDate: request.body.arrivalDate,
        departureDate: request.body.departureDate,
        additionalInfo: request.body.additionalInfo,
    });
    kid.save()
        .then(kid => {
            return response.json(kid);
        });
}

export function update(request, response) {
    KidModel.findById(request.params.id).exec()
        .then(kid => {
            kid.name = request.body.name || kid.name;
            kid.age = request.body.age || kid.age;
            kid.parentsNames = request.body.parentsNames || kid.parentsNames;
            kid.siblingsInfo = request.body.siblingsInfo || kid.siblingsInfo;
            kid.favCharacter = request.body.favCharacter || kid.favCharacter;
            kid.arrivalDate = request.body.arrivalDate || kid.arrivalDate;
            kid.departureDate = request.body.departureDate || kid.departureDate;
            additionalInfo = request.body.additionalInfo|| kid.additionalInfo;
            return kid.save();
        })
        .then(kid => {
            return response.json(kid);
        })
}

export function remove(request, response) {
    KidModel.findByIdAndRemove(request.params.id).exec()
    .then(kids => {
        return response.json(kids);
    });
}