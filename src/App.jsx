import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="container mx-auto flex items-center justify-between py-6">
        <a href="/" className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 115 97" fill="none">
          <path d="M51.8561 0.0493011L114.728 62.951V96.7194H85.3875V75.0901L39.7231 29.4034H30.2372V96.7194H0.897125V0.0493011H51.8561ZM85.3875 33.5969V0.0493011H114.728V33.5969H85.3875Z" fill="white"/>
        </svg>
        </a>
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-gray-300">
            Art
          </a>
          <a href="#" className="text-sm font-medium hover:text-gray-300">
            Collections
          </a>
          <a href="#" className="text-sm font-medium hover:text-gray-300">
            Sales
          </a>
          <a href="#" className="text-sm font-medium hover:text-gray-300">
            Design
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 text-center relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-orange-500 to-yellow-500 blur-3xl opacity-30 rounded-full"></div>
        </div>

        <Badge variant="outline" className="mb-6 inline-flex items-center gap-1 px-3 py-1 rounded-full border-gray-700">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Experience generative AI</span>
        </Badge>

        <h1 className="text-5xl font-bold mb-4 max-w-2xl mx-auto">Your Smart Finance Companion</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          AI.Fi is your trusted partner in navigating the complexities of the financial world with ease and confidence.
          Powered by advanced artificial intelligence, AI.Fi provides innovative, tailored solutions to meet your
          specific financial goals and needs.
        </p>

        <Button className="rounded-full bg-gradient-to-r from-purple-400 to-purple-300 text-black px-8 py-2 font-medium">
          Get Started
        </Button>

        {/* Dashboard Preview */}
        <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 p-6 hidden md:block">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Samantha" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-gray-900"></span>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Samantha</h3>
                </div>
              </div>

              <nav className="space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-400 hover:bg-gray-800 rounded">
                  Dashboard
                </a>
                <a href="#" className="block px-3 py-2 text-white bg-gray-800 rounded">
                  Expenses
                </a>
                <a href="#" className="block px-3 py-2 text-gray-400 hover:bg-gray-800 rounded">
                  Wallets
                </a>
                <a href="#" className="block px-3 py-2 text-gray-400 hover:bg-gray-800 rounded">
                  Summary
                </a>
                <a href="#" className="block px-3 py-2 text-gray-400 hover:bg-gray-800 rounded">
                  Accounts
                </a>
                <a href="#" className="block px-3 py-2 text-gray-400 hover:bg-gray-800 rounded">
                  Settings
                </a>
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col md:flex-row">
              {/* Expenses Chart */}
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-gray-900 text-xl font-medium">Expenses</h2>
                  <span className="text-gray-500 text-sm">Last 30 days</span>
                </div>

                <ExpensesBarChart />

                <div className="mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-900 font-medium">Today</h3>
                  </div>

                  <div className="space-y-4">
                    <ExpenseItem
                      color="bg-blue-500"
                      category="Grocery"
                      description="Whole Foods Market, Organic"
                      amount="-$28.50"
                    />
                    <ExpenseItem
                      color="bg-purple-500"
                      category="Transportation"
                      description="Uber ride from work"
                      amount="-$15.00"
                    />
                    <ExpenseItem color="bg-yellow-500" category="Shopping" description="Amazon.com" amount="-$89.75" />
                  </div>

                  <div className="mt-4 text-sm text-gray-500">Monday, 23 March 2020</div>

                  <div className="mt-2 space-y-4">
                    <ExpenseItem
                      color="bg-red-500"
                      category="Food and Drink"
                      description="Starbucks Coffee"
                      amount="-$4.50"
                    />
                    <ExpenseItem
                      color="bg-green-500"
                      category="Entertainment"
                      description="Netflix, Monthly Subscription"
                      amount="-$9.99"
                    />
                  </div>
                </div>
              </div>

              {/* Right Panel - Budget */}
              <div className="p-6 w-full md:w-72 bg-gray-50">
                <div className="flex items-center mb-6">
                  <div className="flex -space-x-2">
                    <Avatar className="h-6 w-6 border-2 border-white">
                      <AvatarFallback>1</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-6 w-6 border-2 border-white">
                      <AvatarFallback>2</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-6 w-6 border-2 border-white">
                      <AvatarFallback>3</AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-gray-900 font-medium mb-4">Where's your money go?</h3>

                  <div className="space-y-4">
                    <BudgetItem category="Food and Drink" percentage={75} amount="$75.40" color="bg-green-500" />
                    <BudgetItem category="Shopping" percentage={45} amount="$50.20" color="bg-blue-500" />
                    <BudgetItem category="Housing" percentage={90} amount="$350.00" color="bg-purple-500" />
                    <BudgetItem category="Entertainment" percentage={30} amount="$22.00" color="bg-yellow-500" />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-900 font-medium">Save more money</h3>
                  </div>

                  <div className="flex mt-4 mb-6">
                    <div className="w-1/2">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt="Savings"
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                    <div className="w-1/2">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt="Growth"
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-black text-white rounded-md py-3">View Details</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="container mx-auto py-16 text-center">
        <p className="text-gray-400 mb-8">
          Come aboard and join the maintainers and contributors of the best generative AI SaaS projects listed on our
          website:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <img
            src="/placeholder.svg?height=30&width=100"
            alt="Amazon"
            width={100}
            height={30}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src="/placeholder.svg?height=30&width=100"
            alt="Facebook"
            width={100}
            height={30}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src="/placeholder.svg?height=30&width=100"
            alt="Google"
            width={100}
            height={30}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src="/placeholder.svg?height=30&width=100"
            alt="Netflix"
            width={100}
            height={30}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src="/placeholder.svg?height=30&width=100"
            alt="Spotify"
            width={100}
            height={30}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src="/placeholder.svg?height=30&width=100"
            alt="Last.fm"
            width={100}
            height={30}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </section>

      {/* Automate Finance Section */}
      <section className="container mx-auto py-16 text-center relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-tr from-purple-500 to-blue-500 blur-3xl opacity-20 rounded-full"></div>
        </div>

        <Badge variant="outline" className="mb-6 inline-flex items-center gap-1 px-3 py-1 rounded-full border-gray-700">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Benefit</span>
        </Badge>

        <h2 className="text-4xl font-bold mb-4">Automate your finance</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Automating your finances can streamline your money management process, saving you time and ensuring that your
          financial obligations are met promptly.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Educational Resources Card */}
          <div className="bg-gray-900 rounded-xl p-8 text-left relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] opacity-10"></div>
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge className="bg-blue-500 text-white rounded-full px-4 py-1">Tutorials</Badge>
                <Badge className="bg-purple-500 text-white rounded-full px-4 py-1">Courses</Badge>
                <Badge className="bg-pink-500 text-white rounded-full px-4 py-1">Guides</Badge>
                <Badge className="bg-cyan-500 text-white rounded-full px-4 py-1">Q&A Sessions</Badge>
                <Badge className="bg-orange-500 text-white rounded-full px-4 py-1">Podcasts</Badge>
                <Badge className="bg-yellow-500 text-white rounded-full px-4 py-1">Workshops</Badge>
              </div>

              <h3 className="text-xl font-bold mb-4">Educational Resources</h3>
              <p className="text-gray-400">
                Access a wealth of educational materials, including articles, videos, and tutorials, curated by
                financial experts. Whether you're new to finance or a seasoned investor.
              </p>
            </div>
          </div>

          {/* Track Your Progress Card */}
          <div className="bg-orange-300 rounded-xl p-8 text-left text-gray-800">
            <h3 className="text-xl font-bold mb-4">Track finance data in real-time</h3>

            <div className="h-48 mt-8">
              <FinanceLineChart />
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Track Your Progress</h3>
              <p className="text-gray-700">
                Deploy and manage any application on any cloud provider with Rig and Kubernetes. Rigonauts developers to
                deploy well-configured applications in Kubernetes.
              </p>
            </div>
          </div>

          {/* Proactive Risk Card */}
          <div className="bg-gray-800 rounded-xl p-8 text-left">
            <h3 className="text-xl font-bold mb-4">Proactive Risk</h3>
            <p className="text-gray-400">
              Protect your financial future with AI.Fi's proactive risk management tools. Our AI algorithms monitor
              market trends, detect potential risks, and alert you to potential threats to your portfolio's performance.
            </p>
          </div>

          {/* Budgeting and Expense Card */}
          <div className="lg:col-span-3 md:col-span-2 bg-gray-800 rounded-xl p-8 text-left">
            <h3 className="text-xl font-bold mb-4">Budgeting and Expense</h3>
            <p className="text-gray-400">
              Take control of your finances with AI.Fi's intuitive budgeting and expense tracking tools. Monitor your
              spending, set savings goals, and track your progress in real-time, all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-16 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 117 99" fill="none">
              <g clip-path="url(#clip0_1_128)">
                <path d="M51.8561 1.0493L114.728 63.951V97.7194H85.3875V76.0901L39.7231 30.4034H30.2372V97.7194H0.897125V1.0493H51.8561ZM85.3875 34.5969V1.0493H114.728V34.5969H85.3875Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_1_128">
                  <rect width="115.917" height="98.5292" fill="white" transform="translate(0.895828 0.120834)"/>
                </clipPath>
              </defs>
            </svg>
            </a>
            <p className="text-gray-500 text-sm mb-4">
              1234 Codeified Dr
              <br />
              Buffalo Grove, Illinois 60089
            </p>
            <p className="text-gray-500 text-sm mb-4">(847) 945-4011</p>
            <p className="text-gray-500 text-sm">contact@lift.agency</p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-white">
                  Growers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Merchants
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  aedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Button className="bg-blue-500 text-white rounded-full px-6 py-2">Join</Button>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">© 2020 Lift Media. All rights reserved.</div>
      </footer>
    </div>
  )
}

function ExpenseItem({ color, category, description, amount }) {
  return (
    <div className="flex items-center">
      <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white shrink-0`}>
        <span className="text-xs">{category.charAt(0)}</span>
      </div>
      <div className="ml-3 flex-1">
        <div className="font-medium text-gray-900">{category}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      <div className="text-gray-900 font-medium">{amount}</div>
    </div>
  )
}

function BudgetItem({ category, percentage, amount, color }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-600">{category}</span>
        <span className="text-sm font-medium text-gray-900">{amount}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

function ExpensesBarChart() {
  return (
    <div className="h-40">
      <div className="flex h-full items-end">
        {[30, 45, 25, 60, 35, 50, 40, 30, 45, 55, 60, 40, 50, 55, 70].map((value, i) => (
          <div key={i} className="flex-1 mx-0.5">
            <div
              className={`w-full rounded-t ${i === 14 ? "bg-blue-500" : "bg-blue-200"}`}
              style={{ height: `${value}%` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FinanceLineChart() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-0 top-0 text-xs text-gray-700">$500</div>
      <div className="absolute left-0 top-1/4 text-xs text-gray-700">$400</div>
      <div className="absolute left-0 top-1/2 text-xs text-gray-700">$300</div>
      <div className="absolute left-0 top-3/4 text-xs text-gray-700">$200</div>
      <div className="absolute left-0 bottom-0 text-xs text-gray-700">$100</div>

      <svg className="h-full w-full" viewBox="0 0 300 100" preserveAspectRatio="none">
        <path
          d="M0,50 C20,40 40,80 60,70 C80,60 100,20 120,30 C140,40 160,90 180,80 C200,70 220,40 240,30 C260,20 280,40 300,50"
          fill="none"
          stroke="#f97316"
          strokeWidth="3"
        />
        <path
          d="M0,50 C20,40 40,80 60,70 C80,60 100,20 120,30 C140,40 160,90 180,80 C200,70 220,40 240,30 C260,20 280,40 300,50 L300,100 L0,100 Z"
          fill="url(#gradient)"
          opacity="0.2"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

