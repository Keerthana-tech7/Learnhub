// ================= STUDY NOTES DATABASE =================

const STUDY_NOTES_DB = {
    "c-basics": {
        id: "c-basics",
        title: "💻 C Programming Basics - Complete Course Notes",
        subject: "C Programming",
        readingTime: "7 min read",
        level: "Beginner",
        summary: "Core foundations of C programming: compilation model, basic data types, control flow structures, functions, pointers, and memory management.",
        content: `
            <h3>1. Introduction to C Language</h3>
            <p>C is a procedural, general-purpose programming language developed by Dennis Ritchie in 1972 at Bell Labs. It serves as the foundation for modern operating systems, compilers, and embedded software.</p>

            <div class="note-callout">
                <strong>💡 Core Features:</strong> Structured language, highly portable, direct memory manipulation via pointers, fast execution speed, and rich set of operators.
            </div>

            <h3>2. Program Structure & Execution</h3>
            <p>Every C program begins execution in the <code>main()</code> function. The standard compilation phases are:</p>
            <ol>
                <li><strong>Preprocessing:</strong> Resolves <code>#include</code> and <code>#define</code> macros.</li>
                <li><strong>Compilation:</strong> Translates C code into assembly instructions.</li>
                <li><strong>Assembly:</strong> Converts assembly instructions into machine code (object file <code>.o</code> / <code>.obj</code>).</li>
                <li><strong>Linking:</strong> Links object files with system libraries into an executable (<code>.exe</code> or binary).</li>
            </ol>

            <h3>3. Fundamental Data Types</h3>
            <table class="notes-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Typical Size</th>
                        <th>Format Specifier</th>
                        <th>Example Range / Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>int</code></td>
                        <td>4 bytes</td>
                        <td><code>%d</code> or <code>%i</code></td>
                        <td>-2,147,483,648 to 2,147,483,647</td>
                    </tr>
                    <tr>
                        <td><code>float</code></td>
                        <td>4 bytes</td>
                        <td><code>%f</code></td>
                        <td>3.14159f (6 decimal places)</td>
                    </tr>
                    <tr>
                        <td><code>double</code></td>
                        <td>8 bytes</td>
                        <td><code>%lf</code></td>
                        <td>3.1415926535 (15 decimal places)</td>
                    </tr>
                    <tr>
                        <td><code>char</code></td>
                        <td>1 byte</td>
                        <td><code>%c</code></td>
                        <td>'A', 'z', ASCII 0 - 255</td>
                    </tr>
                </tbody>
            </table>

            <h3>4. Control Flow & Loops</h3>
            <p>C provides structured decision making and repetition constructs:</p>
            <ul>
                <li><strong>Conditionals:</strong> <code>if</code>, <code>else if</code>, <code>else</code>, and <code>switch-case</code> for multi-branch branching.</li>
                <li><strong>Iterative Loops:</strong> <code>for</code> (definite iteration), <code>while</code> (entry-controlled), and <code>do-while</code> (exit-controlled, executes at least once).</li>
                <li><strong>Jump Statements:</strong> <code>break</code> (exit loop/switch), <code>continue</code> (skip current iteration), and <code>return</code> (exit function).</li>
            </ul>

            <h3>5. Pointers & Memory Management</h3>
            <p>A <strong>pointer</strong> is a variable that stores the memory address of another variable.</p>
            <ul>
                <li><code>&amp;</code> (Address-of operator): Retrieves variable's memory address.</li>
                <li><code>*</code> (Dereference operator): Accesses value stored at the memory address pointed to.</li>
                <li><strong>Dynamic Allocation:</strong> <code>malloc()</code>, <code>calloc()</code>, <code>realloc()</code>, and <code>free()</code> from <code>&lt;stdlib.h&gt;</code>.</li>
            </ul>

            <div class="code-block">
                <div class="code-header">
                    <span>c_pointers_example.c</span>
                    <button class="copy-code-btn" onclick="copyCodeSnippet(this)">Copy Code</button>
                </div>
                <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    printf("Before swap: x = %d, y = %d\\n", x, y);

    // Pass addresses to swap function
    swap(&amp;x, &amp;y);
    printf("After swap:  x = %d, y = %d\\n", x, y);

    // Dynamic array allocation
    int *arr = (int *)malloc(5 * sizeof(int));
    if (arr != NULL) {
        for (int i = 0; i &lt; 5; i++) {
            arr[i] = (i + 1) * 10;
            printf("arr[%d] = %d\\n", i, arr[i]);
        }
        free(arr); // Always free allocated memory!
    }

    return 0;
}</code></pre>
            </div>

            <h3>6. Quick Exam & Interview Takeaways</h3>
            <div class="note-callout">
                <strong>⚠️ Beware of:</strong>
                <ul>
                    <li>Dangling pointers (referencing freed memory).</li>
                    <li>Memory leaks (forgetting to call <code>free()</code>).</li>
                    <li>Array index out-of-bounds (C does not perform bounds checking!).</li>
                </ul>
            </div>
        `
    },

    "web-dev": {
        id: "web-dev",
        title: "🌐 HTML5 & Modern CSS - Web Development Notes",
        subject: "Web Development",
        readingTime: "8 min read",
        level: "Beginner to Intermediate",
        summary: "Comprehensive guide to HTML5 semantic structure, modern CSS styling, the Box Model, Flexbox, Grid layout systems, and responsive design media queries.",
        content: `
            <h3>1. Semantic HTML5 Architecture</h3>
            <p>Semantic markup provides clear meaning to both browsers and search engines, improving accessibility (a11y) and SEO ranking.</p>
            <ul>
                <li><code>&lt;header&gt;</code>: Introductory content, branding, or navigational links.</li>
                <li><code>&lt;nav&gt;</code>: Major navigational blocks.</li>
                <li><code>&lt;main&gt;</code>: Dominant, unique content of the document body.</li>
                <li><code>&lt;article&gt;</code>: Self-contained, independently distributable composition.</li>
                <li><code>&lt;section&gt;</code>: Thematic grouping of content with a heading.</li>
                <li><code>&lt;aside&gt;</code>: Content tangentially related to surrounding content (sidebars, callouts).</li>
                <li><code>&lt;footer&gt;</code>: Authorship, copyright, and contact information.</li>
            </ul>

            <h3>2. The CSS Box Model</h3>
            <p>Every element in a web page is rendered as a rectangular box consisting of four layers:</p>
            <ol>
                <li><strong>Content:</strong> Text, images, or child elements.</li>
                <li><strong>Padding:</strong> Transparent spacing between content and border.</li>
                <li><strong>Border:</strong> Line surrounding the padding and content.</li>
                <li><strong>Margin:</strong> Space separating the element from neighboring elements.</li>
            </ol>

            <div class="note-callout">
                <strong>💡 Modern Standard:</strong> Always set <code>* { box-sizing: border-box; }</code> so padding and border are included in the element's total calculated width and height!
            </div>

            <h3>3. Flexbox vs. CSS Grid Cheatsheet</h3>
            <table class="notes-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Flexbox (1-Dimensional)</th>
                        <th>CSS Grid (2-Dimensional)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Primary Use</strong></td>
                        <td>Components, navbars, rows or columns</td>
                        <td>Overall page layouts, photo galleries, dashboards</td>
                    </tr>
                    <tr>
                        <td><strong>Key Parent Properties</strong></td>
                        <td><code>display: flex</code>, <code>justify-content</code>, <code>align-items</code>, <code>gap</code></td>
                        <td><code>display: grid</code>, <code>grid-template-columns</code>, <code>grid-template-rows</code></td>
                    </tr>
                    <tr>
                        <td><strong>Item Control</strong></td>
                        <td><code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code></td>
                        <td><code>grid-column: span 2</code>, <code>grid-row</code></td>
                    </tr>
                </tbody>
            </table>

            <h3>4. Modern Responsive CSS Component Example</h3>
            <div class="code-block">
                <div class="code-header">
                    <span>styles.css</span>
                    <button class="copy-code-btn" onclick="copyCodeSnippet(this)">Copy Code</button>
                </div>
                <pre><code>/* Responsive Card Grid with CSS Grid */
.cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    padding: 20px;
}

/* Glassmorphism Card Style */
.study-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.study-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

/* Mobile Media Query */
@media (max-width: 640px) {
    .cards-container {
        grid-template-columns: 1fr;
        padding: 12px;
    }
}</code></pre>
            </div>

            <h3>5. Key Exam & Production Tips</h3>
            <ul>
                <li>Use REM/EM units for typography and spacing for better accessibility and zoom scalability.</li>
                <li>Always supply descriptive <code>alt</code> text on <code>&lt;img&gt;</code> tags for screen readers.</li>
                <li>Leverage CSS custom properties (variables) like <code>--primary-color: #2563eb;</code> for design system maintainability.</li>
            </ul>
        `
    },

    "aws-cloud": {
        id: "aws-cloud",
        title: "☁️ AWS Basics - Cloud Computing Revision Guide",
        subject: "Cloud Computing",
        readingTime: "9 min read",
        level: "Intermediate",
        summary: "High-yield revision notes on cloud architectures, service models (IaaS, PaaS, SaaS), AWS core compute, storage, networking, database services, and IAM security.",
        content: `
            <h3>1. Cloud Computing Fundamentals</h3>
            <p>Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing.</p>
            <ul>
                <li><strong>Six Advantages of Cloud:</strong> Trade capital expense for variable expense, benefit from massive economies of scale, stop guessing capacity, increase speed and agility, stop spending money running data centers, go global in minutes.</li>
                <li><strong>Cloud Service Models:</strong>
                    <ul>
                        <li><strong>IaaS (Infrastructure as a Service):</strong> Highest level of control. Example: Amazon EC2, VPC.</li>
                        <li><strong>PaaS (Platform as a Service):</strong> Focus on application code without OS/server management. Example: AWS Elastic Beanstalk.</li>
                        <li><strong>SaaS (Software as a Service):</strong> Complete end-user application. Example: Google Workspace, Microsoft 365.</li>
                    </ul>
                </li>
            </ul>

            <h3>2. AWS Global Infrastructure</h3>
            <table class="notes-table">
                <thead>
                    <tr>
                        <th>Concept</th>
                        <th>Definition</th>
                        <th>Key Characteristics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Region</strong></td>
                        <td>A physical geographic location around the world</td>
                        <td>Contains 2+ isolated Availability Zones (e.g., us-east-1, ap-south-1).</td>
                    </tr>
                    <tr>
                        <td><strong>Availability Zone (AZ)</strong></td>
                        <td>One or more discrete data centers with redundant power &amp; networking</td>
                        <td>Connected via low-latency private fiber optic networks.</td>
                    </tr>
                    <tr>
                        <td><strong>Edge Locations</strong></td>
                        <td>Endpoints for CloudFront (CDN) caching content closest to users</td>
                        <td>Reduces latency for worldwide end-users.</td>
                    </tr>
                </tbody>
            </table>

            <h3>3. Core AWS Services Quick Reference</h3>
            <ul>
                <li><strong>Compute:</strong>
                    <ul>
                        <li><strong>Amazon EC2 (Elastic Compute Cloud):</strong> Resizable virtual server instances.</li>
                        <li><strong>AWS Lambda:</strong> Serverless compute that runs code in response to events without provisioning servers.</li>
                    </ul>
                </li>
                <li><strong>Storage:</strong>
                    <ul>
                        <li><strong>Amazon S3 (Simple Storage Service):</strong> Highly durable (99.999999999% durability) object storage for files, media, and backups.</li>
                        <li><strong>Amazon EBS (Elastic Block Store):</strong> Persistent block-level storage volumes for EC2 instances.</li>
                    </ul>
                </li>
                <li><strong>Networking:</strong>
                    <ul>
                        <li><strong>Amazon VPC (Virtual Private Cloud):</strong> Logically isolated virtual network to launch AWS resources.</li>
                        <li><strong>Route 53:</strong> Highly available and scalable cloud Domain Name System (DNS) web service.</li>
                    </ul>
                </li>
                <li><strong>Databases:</strong>
                    <ul>
                        <li><strong>Amazon RDS:</strong> Managed relational database (PostgreSQL, MySQL, Oracle, SQL Server).</li>
                        <li><strong>Amazon DynamoDB:</strong> Fully managed NoSQL key-value and document database with single-digit millisecond latency.</li>
                    </ul>
                </li>
            </ul>

            <h3>4. Security & IAM (Identity and Access Management)</h3>
            <div class="note-callout">
                <strong>🔒 Golden Rules of AWS IAM:</strong>
                <ol>
                    <li>Never use the Root user account for everyday tasks.</li>
                    <li>Always enforce <strong>Multi-Factor Authentication (MFA)</strong>.</li>
                    <li>Follow the <strong>Principle of Least Privilege</strong> (grant only minimum necessary permissions).</li>
                    <li>Use <strong>IAM Roles</strong> for AWS services to communicate securely without embedding access keys.</li>
                </ol>
            </div>

            <div class="code-block">
                <div class="code-header">
                    <span>sample-iam-policy.json</span>
                    <button class="copy-code-btn" onclick="copyCodeSnippet(this)">Copy Code</button>
                </div>
                <pre><code>{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::student-portal-notes",
        "arn:aws:s3:::student-portal-notes/*"
      ]
    }
  ]
}</code></pre>
            </div>
        `
    },

    "java-oop": {
        id: "java-oop",
        title: "☕ Java OOP Concepts - Complete Revision Notes",
        subject: "Java",
        readingTime: "8 min read",
        level: "Intermediate",
        summary: "Master Object-Oriented Programming in Java: classes, objects, the four pillars of OOP (encapsulation, inheritance, polymorphism, abstraction), exception handling, and collections.",
        content: `
            <h3>1. The 4 Pillars of Object-Oriented Programming</h3>
            <ol>
                <li>
                    <strong>Encapsulation:</strong> Bundling data (variables) and methods that operate on the data into a single unit (class) while restricting direct access using <code>private</code> keywords and providing public getters/setters.
                </li>
                <li>
                    <strong>Inheritance:</strong> Mechanism where a new child class acquires properties and behaviors of an existing parent class using the <code>extends</code> keyword. Promotes code reusability.
                </li>
                <li>
                    <strong>Polymorphism:</strong> Ability of an entity to take multiple forms:
                    <ul>
                        <li><em>Compile-time (Method Overloading):</em> Same method name with different parameter signatures.</li>
                        <li><em>Runtime (Method Overriding):</em> Subclass provides specific implementation of a method declared in its superclass using <code>@Override</code>.</li>
                    </ul>
                </li>
                <li>
                    <strong>Abstraction:</strong> Hiding internal implementation details and showing only necessary functionality to the user using <code>abstract</code> classes and <code>interface</code> definitions.
                </li>
            </ol>

            <h3>2. Core OOP Implementation Example</h3>
            <div class="code-block">
                <div class="code-header">
                    <span>StudentPortalDemo.java</span>
                    <button class="copy-code-btn" onclick="copyCodeSnippet(this)">Copy Code</button>
                </div>
                <pre><code>// Abstract Base Class
abstract class Resource {
    private String title;
    private String subject;

    public Resource(String title, String subject) {
        this.title = title;
        this.subject = subject;
    }

    public String getTitle() { return title; }
    public String getSubject() { return subject; }

    // Abstract method to be overridden
    public abstract void openResource();
}

// Subclass implementing inheritance & polymorphism
class NoteResource extends Resource {
    private int pages;

    public NoteResource(String title, String subject, int pages) {
        super(title, subject);
        this.pages = pages;
    }

    @Override
    public void openResource() {
        System.out.println("Opening notes: " + getTitle() + " (" + pages + " pages)");
    }
}

public class StudentPortalDemo {
    public static void main(String[] args) {
        Resource myNotes = new NoteResource("Java OOP Notes", "Java", 24);
        myNotes.openResource(); // Polymorphic invocation
    }
}</code></pre>
            </div>

            <h3>3. Java Collections Framework Overview</h3>
            <table class="notes-table">
                <thead>
                    <tr>
                        <th>Interface</th>
                        <th>Key Implementations</th>
                        <th>Characteristics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>List</code></td>
                        <td><code>ArrayList</code>, <code>LinkedList</code></td>
                        <td>Ordered collection, allows duplicates, positional index access.</td>
                    </tr>
                    <tr>
                        <td><code>Set</code></td>
                        <td><code>HashSet</code>, <code>TreeSet</code></td>
                        <td>Does NOT allow duplicates. TreeSet maintains sorted order.</td>
                    </tr>
                    <tr>
                        <td><code>Map</code></td>
                        <td><code>HashMap</code>, <code>TreeMap</code></td>
                        <td>Key-value pairs, keys are unique, fast lookup O(1) in HashMap.</td>
                    </tr>
                </tbody>
            </table>

            <h3>4. Exception Handling</h3>
            <p>Java uses <code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code>, and <code>throws</code> to handle runtime anomalies cleanly.</p>
            <div class="note-callout">
                <strong>💡 Exam Tip:</strong> The <code>finally</code> block always executes regardless of whether an exception is thrown or caught (ideal for closing database connections and I/O streams).
            </div>
        `
    },

    "python-core": {
        id: "python-core",
        title: "🐍 Python Programming Essentials - Study Notes",
        subject: "Python",
        readingTime: "6 min read",
        level: "Beginner to Intermediate",
        summary: "Concise yet thorough guide to Python syntax, built-in data structures (lists, tuples, dicts, sets), list comprehensions, functions, file handling, and best practices.",
        content: `
            <h3>1. Core Python Data Structures</h3>
            <table class="notes-table">
                <thead>
                    <tr>
                        <th>Structure</th>
                        <th>Syntax Example</th>
                        <th>Mutable?</th>
                        <th>Duplicates Allowed?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>List</strong></td>
                        <td><code>numbers = [1, 2, 3]</code></td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td><strong>Tuple</strong></td>
                        <td><code>point = (10, 20)</code></td>
                        <td>No (Immutable)</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td><strong>Set</strong></td>
                        <td><code>unique = {1, 2, 3}</code></td>
                        <td>Yes</td>
                        <td>No (Unique elements only)</td>
                    </tr>
                    <tr>
                        <td><strong>Dictionary</strong></td>
                        <td><code>user = {"id": 101, "name": "Alex"}</code></td>
                        <td>Yes</td>
                        <td>Keys: No, Values: Yes</td>
                    </tr>
                </tbody>
            </table>

            <h3>2. Comprehensions & Pythonic Syntax</h3>
            <p>Comprehensions provide a concise way to create lists and dictionaries without writing verbose loops:</p>
            <div class="code-block">
                <div class="code-header">
                    <span>comprehensions.py</span>
                    <button class="copy-code-btn" onclick="copyCodeSnippet(this)">Copy Code</button>
                </div>
                <pre><code># List comprehension: square even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = [n ** 2 for n in numbers if n % 2 == 0]
print(even_squares)  # [4, 16, 36, 64, 100]

# Dictionary comprehension
scores = {"Alice": 88, "Bob": 92, "Charlie": 78}
passed = {name: score for name, score in scores.items() if score >= 80}
print(passed)  # {'Alice': 88, 'Bob': 92}</code></pre>
            </div>

            <h3>3. File I/O & Context Managers</h3>
            <p>Always use the <code>with</code> statement for file operations to ensure the file is automatically closed even if an exception occurs:</p>
            <div class="code-block">
                <div class="code-header">
                    <span>file_handling.py</span>
                    <button class="copy-code-btn" onclick="copyCodeSnippet(this)">Copy Code</button>
                </div>
                <pre><code># Reading file safely with context manager
try:
    with open("study_notes.txt", "r", encoding="utf-8") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("Notes file not found. Creating a new one...")
    with open("study_notes.txt", "w", encoding="utf-8") as file:
        file.write("Python Study Notes - Chapter 1")</code></pre>
            </div>

            <h3>4. Functions & *args, **kwargs</h3>
            <ul>
                <li><code>*args</code>: Allows passing a variable number of positional arguments as a tuple.</li>
                <li><code>**kwargs</code>: Allows passing arbitrary keyword arguments as a dictionary.</li>
                <li><strong>Lambda functions:</strong> Small anonymous functions written in a single line (e.g., <code>add = lambda x, y: x + y</code>).</li>
            </ul>

            <div class="note-callout">
                <strong>💡 PEP 8 Best Practice:</strong> Use 4 spaces per indentation level, write descriptive snake_case variable and function names, and include docstrings for clear code documentation.
            </div>
        `
    }
};

let currentActiveNoteId = null;


// ================= AUTHENTICATION & STATE MANAGEMENT =================

const AUTH_STORAGE_KEY_REGISTERED = "studyportal_has_registered";
const AUTH_STORAGE_KEY_LOGGED_IN = "studyportal_is_logged_in";
const AUTH_STORAGE_KEY_USER = "studyportal_user_data";
const PROTECTED_PAGES = ["home", "resources", "upload", "ai-search", "admin"];

function hasUserRegistered() {
    return localStorage.getItem(AUTH_STORAGE_KEY_REGISTERED) === "true";
}

function markUserAsRegistered() {
    localStorage.setItem(AUTH_STORAGE_KEY_REGISTERED, "true");
}

function isUserLoggedIn() {
    return sessionStorage.getItem(AUTH_STORAGE_KEY_LOGGED_IN) === "true";
}

function setLoggedInUser(user) {
    sessionStorage.setItem(AUTH_STORAGE_KEY_LOGGED_IN, "true");
    sessionStorage.setItem(AUTH_STORAGE_KEY_USER, JSON.stringify(user));
    markUserAsRegistered();
}

function getCurrentUser() {
    try {
        const data = sessionStorage.getItem(AUTH_STORAGE_KEY_USER);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        return null;
    }
}

function clearSessionLogin() {
    sessionStorage.removeItem(AUTH_STORAGE_KEY_LOGGED_IN);
    sessionStorage.removeItem(AUTH_STORAGE_KEY_USER);
}

function displayAuthMessage(elementId, text, type) {
    const el = document.getElementById(elementId);
    if (!el) return;

    if (!text) {
        el.textContent = "";
        el.className = "auth-message";
        el.style.display = "none";
        return;
    }

    el.textContent = text;
    el.className = `auth-message ${type}`;
    el.style.display = "block";
}

function updateNavUI() {
    const loggedIn = isUserLoggedIn();
    const registered = hasUserRegistered();

    const protectedNavLinks = document.querySelectorAll(".nav-protected");
    const navRegister = document.getElementById("nav-register");
    const navLogin = document.getElementById("nav-login");
    const userGreeting = document.getElementById("user-greeting");
    const navLogout = document.getElementById("nav-logout");
    const firstTimeHelper = document.getElementById("first-time-helper");

    if (loggedIn) {
        // User is logged in: show portal navigation
        protectedNavLinks.forEach(function(link) {
            link.style.display = "inline-block";
        });

        // Hide auth links
        if (navRegister) navRegister.style.display = "none";
        if (navLogin) navLogin.style.display = "none";

        // Show user greeting and logout button
        const user = getCurrentUser();
        const userGreetingName = document.getElementById("user-greeting-name");
        if (userGreetingName) {
            userGreetingName.textContent = user ? user.name : "Student";
            if (userGreeting) userGreeting.style.display = "inline-flex";
        } else if (userGreeting) {
            userGreeting.textContent = user ? `👤 ${user.name}` : "👤 Logged In";
            userGreeting.style.display = "inline-flex";
        }
        if (navLogout) {
            navLogout.style.display = "inline-block";
        }
    } else {
        // User not logged in: hide all protected navigation
        protectedNavLinks.forEach(function(link) {
            link.style.display = "none";
        });

        if (userGreeting) userGreeting.style.display = "none";
        if (navLogout) navLogout.style.display = "none";

        if (registered) {
            // Returning user: show Login directly; do NOT show Register
            if (navRegister) navRegister.style.display = "none";
            if (navLogin) navLogin.style.display = "inline-block";
            if (firstTimeHelper) firstTimeHelper.style.display = "none";
        } else {
            // New user first visit: show Register
            if (navRegister) navRegister.style.display = "inline-block";
            if (navLogin) navLogin.style.display = "inline-block";
            if (firstTimeHelper) firstTimeHelper.style.display = "block";
        }
    }
}

// ================= PAGE NAVIGATION =================

function showPage(pageId, options = {}) {
    const loggedIn = isUserLoggedIn();
    const registered = hasUserRegistered();

    // Protection rule: Home and portal pages require authentication
    if (!loggedIn && PROTECTED_PAGES.includes(pageId)) {
        if (registered) {
            showToast("Please log in to access the portal.");
            pageId = "login";
        } else {
            showToast("Please register first to get started.");
            pageId = "register";
        }
    }

    // Returning user rule: Do not show Register page again for already registered user
    if (registered && !loggedIn && pageId === "register" && !options.allowRegisterOverride) {
        showToast("You are already registered. Please log in.");
        pageId = "login";
    }

    // Logged-in user trying to visit auth pages is kept on home
    if (loggedIn && (pageId === "login" || pageId === "register")) {
        pageId = "home";
    }

    const pages = document.querySelectorAll(".page");
    pages.forEach(function(page) {
        page.style.display = "none";
    });

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = "block";
        selectedPage.style.animation = "none";
        selectedPage.offsetHeight; // trigger reflow for smooth re-animation
        selectedPage.style.animation = "";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Highlight active nav item
    document.querySelectorAll("#main-nav a.nav-link").forEach(function(link) {
        link.classList.remove("active");
        const onclickAttr = link.getAttribute("onclick") || "";
        if (onclickAttr.includes(`'${pageId}'`)) {
            link.classList.add("active");
        }
    });

    updateNavUI();
}

function handleLogoClick() {
    if (isUserLoggedIn()) {
        showPage("home");
    } else if (hasUserRegistered()) {
        showPage("login");
    } else {
        showPage("register");
    }
}

function handleDirectRegisterClick(e) {
    if (e) e.preventDefault();
    showPage("register", { allowRegisterOverride: true });
}

function initializeAuthFlow() {
    updateNavUI();

    if (isUserLoggedIn()) {
        showPage("home");
    } else if (hasUserRegistered()) {
        // Returning user: show Login page directly
        showPage("login");
    } else {
        // First-time visit: show Register page
        showPage("register");
    }
}


// ================= TOAST NOTIFICATION =================

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 2800);
}


// ================= NOTES READER VIEWER =================

function openNotesViewer(resourceId) {
    let noteData = STUDY_NOTES_DB[resourceId];

    // Fallback if not found in database: generate dynamic note preview
    if (!noteData) {
        const card = document.querySelector(`.resource-card[data-id="${resourceId}"]`);
        const cardTitle = card ? card.querySelector("h2").innerText : "Study Resource Notes";
        const cardSubject = card ? (card.dataset.subject || "General") : "General";
        const cardDesc = card ? card.querySelector("p").innerText : "No description provided.";

        noteData = {
            id: resourceId,
            title: cardTitle,
            subject: cardSubject,
            readingTime: "5 min read",
            level: "All Levels",
            summary: cardDesc,
            content: `
                <h3>Overview</h3>
                <p>${cardDesc}</p>
                <div class="note-callout">
                    <strong>Study Notes:</strong> Detailed syllabus notes for this topic are actively maintained by the community. You can download or print these materials for your personal exam revision.
                </div>
            `
        };
    }

    currentActiveNoteId = noteData.id;

    // Populate modal fields
    const modal = document.getElementById("notes-modal");
    const modalTitle = document.getElementById("modal-resource-title");
    const modalSubject = document.getElementById("modal-subject-tag");
    const modalTime = document.getElementById("modal-reading-time");
    const modalLevel = document.getElementById("modal-level");
    const modalSummary = document.getElementById("modal-summary-text");
    const modalContent = document.getElementById("modal-notes-content");

    if (modalTitle) modalTitle.textContent = noteData.title;
    if (modalSubject) modalSubject.textContent = noteData.subject;
    if (modalTime) modalTime.textContent = `⏱️ ${noteData.readingTime}`;
    if (modalLevel) modalLevel.textContent = `🎯 Level: ${noteData.level}`;
    if (modalSummary) modalSummary.textContent = noteData.summary;
    if (modalContent) modalContent.innerHTML = noteData.content;

    // Show modal and prevent background scrolling
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeNotesViewer() {
    const modal = document.getElementById("notes-modal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Copy Code Snippet helper
window.copyCodeSnippet = function(button) {
    const codeBlock = button.closest(".code-block");
    if (!codeBlock) return;
    const codeElement = codeBlock.querySelector("pre code");
    if (!codeElement) return;

    navigator.clipboard.writeText(codeElement.innerText).then(() => {
        const originalText = button.textContent;
        button.textContent = "Copied! ✓";
        showToast("✓ Code copied to clipboard!");
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    }).catch(() => {
        showToast("Failed to copy code.");
    });
};


// ================= COPY & DOWNLOAD UTILITIES =================

function copyCurrentNotes() {
    if (!currentActiveNoteId || !STUDY_NOTES_DB[currentActiveNoteId]) {
        const modalContent = document.getElementById("modal-notes-content");
        if (modalContent) {
            navigator.clipboard.writeText(modalContent.innerText).then(() => {
                showToast("📋 Notes copied to clipboard!");
            });
        }
        return;
    }

    const note = STUDY_NOTES_DB[currentActiveNoteId];
    const modalContent = document.getElementById("modal-notes-content");
    const rawText = `=== ${note.title} ===\nSubject: ${note.subject}\nLevel: ${note.level} | Read Time: ${note.readingTime}\n\nOverview:\n${note.summary}\n\nNotes Content:\n${modalContent ? modalContent.innerText : ''}\n\nDownloaded from Student Study Resource Portal.`;

    navigator.clipboard.writeText(rawText).then(() => {
        showToast("📋 Full study notes copied to clipboard!");
    }).catch(() => {
        showToast("Could not copy notes to clipboard.");
    });
}

function downloadCurrentNotes() {
    if (!currentActiveNoteId) return;
    const note = STUDY_NOTES_DB[currentActiveNoteId] || {
        title: "Study Notes",
        subject: "General",
        summary: ""
    };

    const modalContent = document.getElementById("modal-notes-content");
    const notesText = `=====================================================
${note.title}
Subject: ${note.subject}
Portal: Student Study Resource Portal
=====================================================

OVERVIEW:
${note.summary}

-----------------------------------------------------
DETAILED NOTES:
-----------------------------------------------------
${modalContent ? modalContent.innerText : ''}

=====================================================
Good luck with your studies & exams!
=====================================================`;

    const blob = new Blob([notesText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${currentActiveNoteId}-study-notes.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast("⬇️ Notes downloaded successfully!");
}

function printCurrentNotes() {
    window.print();
}


// ================= INITIAL SETUP & EVENT LISTENERS =================

document.addEventListener("DOMContentLoaded", function() {

    // Initialize Navigation & Authentication Flow
    initializeAuthFlow();

    // Initialize Real Statistics
    const statResources = document.getElementById("stat-resources");
    const statSubjects = document.getElementById("stat-subjects");
    const statDownloads = document.getElementById("stat-downloads");

    if (statResources) statResources.textContent = "5";
    if (statSubjects) statSubjects.textContent = "5";
    if (statDownloads) statDownloads.textContent = "1.2k+";

    // Attach "View Resource" listeners
    setupResourceButtons();

    // Setup Modal Controls
    const closeModalBtn = document.getElementById("close-modal-btn");
    const footerCloseBtn = document.getElementById("footer-close-btn");
    const modalBackdrop = document.getElementById("notes-modal");
    const copyNotesBtn = document.getElementById("copy-notes-btn");
    const downloadNotesBtn = document.getElementById("download-notes-btn");
    const printNotesBtn = document.getElementById("print-notes-btn");

    if (closeModalBtn) closeModalBtn.addEventListener("click", closeNotesViewer);
    if (footerCloseBtn) footerCloseBtn.addEventListener("click", closeNotesViewer);

    // Close on backdrop click (outside modal dialog)
    if (modalBackdrop) {
        modalBackdrop.addEventListener("click", function(e) {
            if (e.target === modalBackdrop) {
                closeNotesViewer();
            }
        });
    }

    // Close on Escape key press
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            closeNotesViewer();
        }
    });

    if (copyNotesBtn) copyNotesBtn.addEventListener("click", copyCurrentNotes);
    if (downloadNotesBtn) downloadNotesBtn.addEventListener("click", downloadCurrentNotes);
    if (printNotesBtn) printNotesBtn.addEventListener("click", printCurrentNotes);

    // Setup Search and Filter
    setupFilters();
    setupFilterChips();
    setupAiSuggestionChips();
});

function setupResourceButtons() {
    const resourceButtons = document.querySelectorAll(".view-resource-btn, .resource-card button");

    resourceButtons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            const card = this.closest(".resource-card");
            const resourceId = this.dataset.id || (card ? card.dataset.id : null);
            if (resourceId) {
                openNotesViewer(resourceId);
            } else {
                openNotesViewer("c-basics");
            }
        });
    });
}


// ================= SUBJECT FILTER & SEARCH =================

function setupFilters() {
    const subjectFilter = document.getElementById("subject-filter");
    const searchInput = document.getElementById("resource-search");

    function applyFilter() {
        const selectedSubject = subjectFilter ? subjectFilter.value.toLowerCase().trim() : "";
        const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : "";
        const resourceCards = document.querySelectorAll("#resource-list .resource-card");

        resourceCards.forEach(function(card) {
            const cardSubject = (card.dataset.subject || "").toLowerCase();
            const cardText = card.innerText.toLowerCase();

            const matchesSubject = (
                selectedSubject === "" ||
                selectedSubject === "all subjects" ||
                cardSubject === selectedSubject
            );

            const matchesSearch = (
                searchQuery === "" ||
                cardText.includes(searchQuery)
            );

            if (matchesSubject && matchesSearch) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    }

    if (subjectFilter) {
        subjectFilter.addEventListener("change", applyFilter);
    }

    if (searchInput) {
        searchInput.addEventListener("input", applyFilter);
    }
}

// Subject Filter Chips Sync
function setupFilterChips() {
    const chips = document.querySelectorAll(".filter-chip");
    const subjectFilter = document.getElementById("subject-filter");

    chips.forEach(function(chip) {
        chip.addEventListener("click", function() {
            chips.forEach(function(c) { c.classList.remove("active"); });
            this.classList.add("active");

            const subject = this.dataset.subject || "";
            if (subjectFilter) {
                subjectFilter.value = subject;
                subjectFilter.dispatchEvent(new Event("change"));
            }
        });
    });

    if (subjectFilter) {
        subjectFilter.addEventListener("change", function() {
            const currentVal = subjectFilter.value.toLowerCase();
            chips.forEach(function(chip) {
                const chipSubj = (chip.dataset.subject || "").toLowerCase();
                if (chipSubj === currentVal) {
                    chip.classList.add("active");
                } else {
                    chip.classList.remove("active");
                }
            });
        });
    }
}

// AI Quick Query Suggestion Chips
function setupAiSuggestionChips() {
    const queryChips = document.querySelectorAll(".query-chip");
    const aiQuery = document.getElementById("ai-query");
    const aiForm = document.getElementById("ai-form");

    queryChips.forEach(function(chip) {
        chip.addEventListener("click", function() {
            const query = this.dataset.query;
            if (aiQuery && query) {
                aiQuery.value = query;
                if (aiForm) {
                    aiForm.dispatchEvent(new Event("submit"));
                }
            }
        });
    });
}

// Admin Panel Action Handlers
window.handleAdminApprove = function(button) {
    const card = button.closest(".resource-card");
    if (!card) return;
    const actionRow = card.querySelector(".admin-action-row");
    if (actionRow) {
        actionRow.innerHTML = `<span style="color: #059669; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">✓ Resource Approved & Published!</span>`;
    }
    const pendingCount = document.getElementById("admin-pending-count");
    if (pendingCount) pendingCount.textContent = "0";
    showToast("✓ Resource approved and added to active library!");
};

window.handleAdminReject = function(button) {
    const card = button.closest(".resource-card");
    if (!card) return;
    card.style.opacity = "0.5";
    const actionRow = card.querySelector(".admin-action-row");
    if (actionRow) {
        actionRow.innerHTML = `<span style="color: #dc2626; font-weight: 700;">✕ Submission Rejected</span>`;
    }
    const pendingCount = document.getElementById("admin-pending-count");
    if (pendingCount) pendingCount.textContent = "0";
    showToast("Resource submission rejected.");
};


// ================= LOGIN =================

const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const emailInput = document.getElementById("login-email");
        const passwordInput = document.getElementById("login-password");
        const submitBtn = document.getElementById("login-submit-btn");

        const email = emailInput ? emailInput.value.trim() : "";
        const password = passwordInput ? passwordInput.value : "";

        if (!email || !password) {
            displayAuthMessage("login-message", "Please enter both email and password.", "error");
            return;
        }

        displayAuthMessage("login-message", "Verifying credentials...", "info");
        if (submitBtn) submitBtn.disabled = true;

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email, password: password })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // Set logged-in session state
                setLoggedInUser(data.user);

                displayAuthMessage("login-message", `✓ Welcome, ${data.user.name}! Redirecting to Home...`, "success");
                showToast(`✓ Welcome, ${data.user.name}!`);

                loginForm.reset();

                // Required Flow: Login -> Home
                setTimeout(function() {
                    displayAuthMessage("login-message", "", "");
                    showPage("home");
                }, 600);
            } else {
                displayAuthMessage("login-message", `❌ ${data.message || "Invalid credentials."}`, "error");
                showToast(data.message || "Login failed.");
            }
        } catch (error) {
            displayAuthMessage("login-message", "Login failed! Please check backend connection.", "error");
            showToast("Server connection error.");
        } finally {
            if (submitBtn) submitBtn.disabled = false;
        }
    });
}


// ================= REGISTER =================

const registerForm = document.getElementById("register-form");

if (registerForm) {
    registerForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("register-name");
        const emailInput = document.getElementById("register-email");
        const passwordInput = document.getElementById("register-password");
        const submitBtn = document.getElementById("register-submit-btn");

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const password = passwordInput ? passwordInput.value : "";

        if (!name || !email || !password) {
            displayAuthMessage("register-message", "Please fill in all fields.", "error");
            return;
        }

        if (password.length < 6) {
            displayAuthMessage("register-message", "Password must be at least 6 characters long.", "error");
            return;
        }

        displayAuthMessage("register-message", "Creating account...", "info");
        if (submitBtn) submitBtn.disabled = true;

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name, email: email, password: password })
            });

            const data = await response.json();

            if (response.ok && data.success !== false) {
                // Mark user as registered in localStorage
                markUserAsRegistered();

                displayAuthMessage("register-message", "✓ Registration successful! Redirecting to Login...", "success");
                showToast("✓ Account created successfully! Please log in.");

                // Pre-fill email on Login page
                const loginEmail = document.getElementById("login-email");
                if (loginEmail) loginEmail.value = email;

                registerForm.reset();

                // Required Flow: Register -> Login
                setTimeout(function() {
                    displayAuthMessage("register-message", "", "");
                    showPage("login");
                    displayAuthMessage("login-message", "Account registered! Enter your password to log in.", "info");
                    const loginPassword = document.getElementById("login-password");
                    if (loginPassword) loginPassword.focus();
                }, 900);
            } else {
                // If email already registered, mark as registered so returning flow is active
                if (data.message && data.message.toLowerCase().includes("already registered")) {
                    markUserAsRegistered();
                    const loginEmail = document.getElementById("login-email");
                    if (loginEmail) loginEmail.value = email;
                }
                displayAuthMessage("register-message", `❌ ${data.message || "Registration failed."}`, "error");
                showToast(data.message || "Registration failed.");
            }
        } catch (error) {
            displayAuthMessage("register-message", "Registration failed due to connection error.", "error");
            showToast("Server connection error.");
        } finally {
            if (submitBtn) submitBtn.disabled = false;
        }
    });
}


// ================= LOGOUT =================

async function logoutUser() {
    try {
        await fetch("/api/logout", { method: "POST" });
    } catch (e) {
        console.warn("Logout request failed:", e);
    }

    clearSessionLogin();
    showToast("You have been logged out.");

    // Returning user flow: take user to Login page
    showPage("login");
}


// ================= UPLOAD =================

const uploadForm = document.getElementById("upload-form");

if (uploadForm) {
    uploadForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const titleInput = document.getElementById("upload-title");
        const subjectInput = document.getElementById("upload-subject");
        const descInput = document.getElementById("resource-description");

        const title = titleInput ? titleInput.value : "Uploaded Study Notes";
        const subject = subjectInput ? subjectInput.value : "General";
        const desc = descInput ? descInput.value : "User submitted study material.";

        const uniqueId = "user-" + Date.now();

        // Register in local database
        STUDY_NOTES_DB[uniqueId] = {
            id: uniqueId,
            title: title,
            subject: subject,
            readingTime: "5 min read",
            level: "Student Uploaded",
            summary: desc,
            content: `
                <h3>Uploaded Material Overview</h3>
                <p>${desc}</p>
                <div class="note-callout">
                    <strong>📤 Community Upload:</strong> This resource was shared by a student on ${new Date().toLocaleDateString()}. Make sure to review with your course curriculum!
                </div>
            `
        };

        // Add a new card to resource list
        const resourceList = document.getElementById("resource-list");
        if (resourceList) {
            const newCard = document.createElement("div");
            newCard.className = "resource-card";
            newCard.dataset.id = uniqueId;
            newCard.dataset.subject = subject;

            const badgeClass = subject.includes("C") ? "badge-c" : (subject.includes("Web") ? "badge-web" : (subject.includes("Cloud") ? "badge-cloud" : (subject.includes("Java") ? "badge-java" : "badge-python")));

            newCard.innerHTML = `
                <div class="card-top-meta">
                    <span class="card-badge ${badgeClass}">${subject}</span>
                    <span class="card-read-time">⏱️ 5 min read</span>
                </div>
                <h2>📁 ${title}</h2>
                <p>${desc}</p>
                <div class="topic-tags">
                    <span class="topic-tag">#Uploaded</span>
                    <span class="topic-tag">#StudentCommunity</span>
                </div>
                <p><strong>Subject:</strong> ${subject}</p>
                <button class="view-resource-btn" data-id="${uniqueId}">📖 View Resource</button>
            `;

            resourceList.prepend(newCard);
            setupResourceButtons();
        }

        uploadForm.reset();
        showToast("✓ Resource uploaded & added to study notes!");
        showPage("resources");
    });
}


// ================= AI SEARCH =================

const aiForm = document.getElementById("ai-form");

if (aiForm) {
    aiForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const queryInput = document.getElementById("ai-query");
        const query = queryInput ? queryInput.value.trim().toLowerCase() : "";
        const results = document.getElementById("ai-results");

        if (!results) return;

        // Search in STUDY_NOTES_DB
        const matched = [];
        for (const [id, note] of Object.entries(STUDY_NOTES_DB)) {
            if (
                note.title.toLowerCase().includes(query) ||
                note.subject.toLowerCase().includes(query) ||
                note.summary.toLowerCase().includes(query) ||
                note.content.toLowerCase().includes(query)
            ) {
                matched.push(note);
            }
        }

        if (matched.length > 0) {
            results.innerHTML = `
                <h2>🔍 AI Search Results for "${queryInput.value}"</h2>
                <p>Found ${matched.length} relevant study resource(s):</p>
                <div style="display: flex; flex-direction: column; gap: 14px; margin-top: 15px;">
                    ${matched.map(note => `
                        <div class="ai-result-item">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span class="subject-tag">${note.subject}</span>
                                <span style="font-size: 12px; color: #64748b; font-weight: 600;">⏱️ ${note.readingTime} &bull; ${note.level}</span>
                            </div>
                            <h3>${note.title}</h3>
                            <p>${note.summary}</p>
                            <button class="view-resource-btn btn-primary" data-id="${note.id}" style="padding: 10px 20px; font-size: 14px;">
                                📖 Read Full Notes
                            </button>
                        </div>
                    `).join('')}
                </div>
            `;
            setupResourceButtons();
        } else {
            results.innerHTML = `
                <h2>Search Results</h2>
                <p>No exact notes matched "<strong>${queryInput.value}</strong>".</p>
                <p>Try searching for: <em>C Programming</em>, <em>loops</em>, <em>pointers</em>, <em>HTML</em>, <em>Flexbox</em>, <em>AWS</em>, <em>Java</em>, or <em>Python</em>.</p>
            `;
        }
    });
}