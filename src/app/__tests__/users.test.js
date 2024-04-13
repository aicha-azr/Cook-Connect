
/*const { GET } = require('../api/users/[id]/route');

jest.mock('../../Models/userSchema', () => ({
    findById: jest.fn(),
}));

describe('GET /api/users/:id', () => {
    it('should return user if user is found', async () => {
        const userMock = { _id: 'userId', username: 'testuser' };
        User.findById.mockResolvedValueOnce(userMock);

        const req = { params: { id: 'userId' } };
        const res = {};

        const result = await GET(req, res);

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual({ user: userMock });
    });

    it('should return 404 if user is not found', async () => {
        User.findById.mockResolvedValueOnce(null);

        const req = { params: { id: 'nonExistingUserId' } };
        const res = {};

        const result = await GET(req, res);

        expect(result.statusCode).toEqual(404);
        expect(result.body.message).toEqual('Utilisateur nonExistingUserId non trouvé');
    });

    it('should return 500 if an error occurs', async () => {
        const errorMessage = 'Internal Server Error';
        User.findById.mockRejectedValueOnce(new Error(errorMessage));

        const req = { params: { id: 'userId' } };
        const res = {};

        const result = await GET(req, res);

        expect(result.statusCode).toEqual(500);
        expect(result.body.message).toEqual(errorMessage);
    });
});*/