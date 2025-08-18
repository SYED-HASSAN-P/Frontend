import { ArrowRight, BookOpen, Users, Award, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Indix = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Complete React Development",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 12543,
      image: "/api/placeholder/300/200",
      price: "$89.99"
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      instructor: "David Kim",
      rating: 4.9,
      students: 8765,
      image: "/api/placeholder/300/200",
      price: "$79.99"
    },
    {
      id: 3,
      title: "Python for Data Science",
      instructor: "Dr. Maria Rodriguez",
      rating: 4.7,
      students: 15432,
      image: "/api/placeholder/300/200",
      price: "$99.99"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Master Industry Skills with
                <span className="block text-white/90">upDate Learning</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Transform your career with our industry-oriented courses designed by experts. 
                Learn practical skills that matter in today's job market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/student/courses">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-white/90 w-full sm:w-auto">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Explore Courses
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white:bg-white hover:text-red-600 w-full sm:w-auto">
                  Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">10K+</div>
                    <div className="text-white/80">Students</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-white/80">Courses</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-white/80">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-white/80">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-red-600">Why Choose upDate?</h2>
            <p className="text-xl text-muted-foreground">Industry-focused learning that gets results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Expert-Led Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from industry professionals with real-world experience and proven track records.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join a thriving community of learners and get help when you need it most.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn industry-recognized certificates that boost your career prospects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Courses</h2>
            <p className="text-xl text-white/90">Start your learning journey with our most popular courses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-medium transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">by {course.instructor}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                    <span className="text-sm text-white/90">
                      {course.students.toLocaleString()} students
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{course.price}</span>
                    <Link to={`/student/courses/${course.id}`}>
                      <Button size="sm" className="bg-gradient-primary:bg-primary-hover text-white">
                        View Course
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/student/courses">
              <Button size="lg" variant="outline" className="border-white text-white:bg-white hover:text-red-600">
                View All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">10,000+</div>
              <div className="text-muted-foreground">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-muted-foreground">Expert Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-muted-foreground">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of students who have transformed their careers with upDate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="bg-white text-red-600 hover:bg-white/90 w-full sm:w-auto">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning Today
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white:bg-white hover:text-red-600 w-full sm:w-auto">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Indix;
