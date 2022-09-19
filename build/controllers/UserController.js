"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = [
    { id: 1, name: "Adi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Cyndy" },
    { id: 4, name: "Denny" },
    { id: 5, name: "Eka" },
];
class UserController {
    index(req, res) {
        return res.send(data);
    }
    create(req, res) {
        const { id, name } = req.body;
        data.push({
            id: id,
            name: name,
        });
        return res.send("Create success");
    }
    show(req, res) {
        const { id } = req.params;
        let person = data.find(item => item.id == id);
        return res.send(person);
    }
    update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        let person = data.find(item => item.id == id);
        person.name = name;
        return res.send("update success");
    }
    delete(req, res) {
        const { id } = req.params;
        let people = data.filter(item => item.id != id);
        return res.send(people);
    }
}
exports.default = new UserController();
