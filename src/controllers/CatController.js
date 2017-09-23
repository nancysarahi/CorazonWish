import CatModel from "../models/CatModel";

export function list(request, response) {
    CatModel.find({}).exec()
        .then(cats => {
            return response.json(cats);
        });
}

// export function show(request, response) {
//     let catId = request.params.id;
//     let singleCat = contacts.find(function (cat) {
//         return catId === cat._id;
//     });
//     return response.json(singleCat);
// }

export function create(request, response) {
    const cat = new CatModel({
        name: request.body.name,
        age: request.body.age,
        breed: request.body.breed,
        favoriteItem: request.body.favoriteItem,
        sleepingTime: request.body.sleepingTime
    });
    cat.save()
        .then(cat => {
            return response.json(cat);
        });
}

export function update(request, response) {
    CatModel.findById(request.params.id).exec()
        .then(cat => {
            cat.name = request.body.name || cat.name;
            cat.age = request.body.age || cat.age;
            cat.breed = request.body.breed|| cat.breed;
            cat.favoriteItem = request.body.favoriteItem || cat.favoriteItem;
            cat.sleepingTime = request.body.sleepingTime || cat.sleepingTime;
            return cat.save();
        })
        .then(cat => {
            return response.json(cat);
        })
}

export function remove(request, response) {
    CatModel.findByIdAndRemove({_id: request.params.id})
    .then(cats => {
        return response.json(cats);
    });
}