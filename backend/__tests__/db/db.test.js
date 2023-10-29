require("dotenv").config();
const {User} = require("../../models/index")
describe('Test pg with sequilize', () => {
    afterAll(async ()=> {
        await User.destroy({where: {providerName: process.env.TEST_PROVIDER}});
    });
    it('should create a new user in the database', async () => {
        const user = await User.create({
            email: "johndoe132@gmail.com",
            providerName: process.env.TEST_PROVIDER,
            providerId: "password"
        });
        const retrievedUser = await User.findByPk(user.id);

        expect(retrievedUser.email).toBe("johndoe132@gmail.com");
        expect(retrievedUser.providerName).toBe("test");
        expect(retrievedUser.providerId).toBe("password");
    });
    it('should retrieve a list of users from the database', async () => {
        const users = await User.findAll();
        expect(users).not.toBeNull();
        expect(users).toBeDefined();
    });
    it('should update a user\'s name in the database', async () => {
        const user = await User.findOne({where: {email: "johndoe132@gmail.com"}});
        user.email = "johnsmith223@gmail.com";
        await user.save();
        const updatedUser = await User.findByPk(user.id);
        expect(updatedUser.email).toBe("johnsmith223@gmail.com");
    });
    it('should delete a user from the database', async ()=> {
        const user = await User.findOne({where: {email: "johnsmith223@gmail.com"}});
        await user.destroy();
        const deletedUser = await User.findByPk(user.id);
        expect(deletedUser).toBeNull()
    });
});