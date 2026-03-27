import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Pencil, Trash2, Plus, LogOut } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

// Mock posts data
const posts = [
  {
    id: 1,
    title: 'Optimizing Kubernetes Clusters for Scale',
    date: '2025-04-01T12:00:00.000Z',
    status: 'Published',
  },
  {
    id: 2,
    title: 'Implementing Zero-Trust Security Models',
    date: '2025-03-25T12:00:00.000Z',
    status: 'Published',
  },
  {
    id: 3,
    title: 'Monitoring Infrastructure with Prometheus',
    date: '2025-03-18T12:00:00.000Z',
    status: 'Published',
  },
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    toast({
      title: 'Logged out',
      description: 'You have been logged out successfully',
    });
    navigate('/admin');
  };

  const handleDelete = (id: number) => {
    toast({
      title: 'Post deleted',
      description: `Post #${id} has been deleted`,
    });
  };

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your blog content</p>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" onClick={handleLogout}>
            <LogOut size={16} className="mr-2" />
            Logout
          </Button>
          <Link to="/">
            <Button variant="outline">View Site</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card shadow rounded-md p-6">
          <h2 className="font-medium text-lg mb-2">Total Posts</h2>
          <p className="text-3xl font-bold">{posts.length}</p>
        </div>
        <div className="bg-card shadow rounded-md p-6">
          <h2 className="font-medium text-lg mb-2">Published</h2>
          <p className="text-3xl font-bold">{posts.filter(p => p.status === 'Published').length}</p>
        </div>
        <div className="bg-card shadow rounded-md p-6">
          <h2 className="font-medium text-lg mb-2">Drafts</h2>
          <p className="text-3xl font-bold">{posts.filter(p => p.status === 'Draft').length}</p>
        </div>
      </div>

      <div className="bg-card shadow rounded-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Posts</h2>
          <Link to="/admin/post/new">
            <Button size="sm">
              <Plus size={16} className="mr-2" />
              Add New Post
            </Button>
          </Link>
        </div>
        
        {posts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Title</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-right py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{post.title}</td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        {post.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{new Date(post.date).toLocaleDateString()}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Pencil size={16} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDelete(post.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No posts found</p>
            <Button className="mt-4">Create your first post</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
