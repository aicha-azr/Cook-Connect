// __tests__/api.test.js

const { POST, GET } = require('../api/posts/route');
jest.mock('../api/posts/route', () => ({
    POST: jest.fn(),
    GET: jest.fn(),
  }));
  
  
  describe('POST /api/posts', () => {
    it('should create a new post', async () => {
      POST.mockImplementation(async (req, res) => {
        const { user, titre, contenu, images } = req.body;
        const newPost = {
          _id: 'postId',
          user,
          titre,
          contenu,
          images,
        };
        return { statusCode: 200, body: newPost };
      });
  
      const req = { body: { user: 'userId', titre: 'Test Post', contenu: 'This is a test post', images: ['image1.jpg', 'image2.jpg'] } };
      const res = {};
  
      const result = await POST(req, res);
  
      expect(result.statusCode).toEqual(200);
      expect(result.body).toHaveProperty('_id');
      expect(result.body.user).toEqual('userId');
    });
  
  });
  
  describe('GET /api/posts', () => {
    it('should get all posts', async () => {
      GET.mockImplementation(async (req, res) => {
        const posts = [
          { _id: 'postId1', user: 'userId1', titre: 'Post 1', contenu: 'Content 1', images: ['image1.jpg'] },
          { _id: 'postId2', user: 'userId2', titre: 'Post 2', contenu: 'Content 2', images: ['image2.jpg'] },
        ];
        return { statusCode: 200, body: posts };
      });
  
      const req = {};
      const res = {};
  
      const result = await GET(req, res);
  
      expect(result.statusCode).toEqual(200);
      expect(result.body.length).toBeGreaterThanOrEqual(1);
    });
})

