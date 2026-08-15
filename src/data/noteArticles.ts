import type { Language } from './content';

export interface NoteArticle {
  intro: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
    code?: string;
  }>;
  takeaways: string[];
}

export const noteArticles: Record<Language, Record<string, NoteArticle>> = {
  en: {
    'tcp-vs-udp': {
      intro: 'TCP and UDP solve different delivery problems. The useful decision is not which protocol is "better", but which failure mode the product can tolerate.',
      sections: [
        {
          title: 'Connection and delivery guarantees',
          paragraphs: [
            'TCP creates a connection before application data moves. Sequence numbers, acknowledgements and retransmission let the receiver reconstruct an ordered byte stream.',
            'UDP sends independent datagrams. It has much less protocol overhead, but delivery, order and duplicate handling become an application concern when they matter.',
          ],
        },
        {
          title: 'Choose from the user experience',
          paragraphs: [
            'A purchase request, payment confirmation or file transfer cannot silently lose a message, so TCP is usually the natural baseline. A short delay is preferable to incorrect state.',
            'For voice, real-time position updates or a game snapshot, an old packet can be worse than a lost packet. UDP can make sense when the newest state is what users need.',
          ],
        },
        {
          title: 'A practical checklist',
          paragraphs: ['Start with the required outcome, then decide where reliability belongs. Protocol choice should follow data semantics, latency tolerance and recovery behaviour.'],
          code: 'Need every message, in order?  -> TCP\nNeed the newest state quickly?   -> consider UDP\nNeed both?                       -> design the recovery layer explicitly',
        },
      ],
      takeaways: ['TCP trades overhead for ordered, reliable delivery.', 'UDP trades guarantees for lower-latency datagrams.', 'The product failure mode should drive the protocol decision.'],
    },
    'http-rest-java': {
      intro: 'HTTP is the message protocol; REST is a way to model resources over it. Keeping those two ideas distinct makes small APIs easier to reason about.',
      sections: [
        {
          title: 'Read the request as a contract',
          paragraphs: [
            'A request combines method, path, headers and body. The response carries a status code, headers and a representation. Each part tells a client something precise about intent and result.',
            'For example, GET should read without changing state. POST normally creates or triggers work. PUT and PATCH update an existing resource with different replacement semantics.',
          ],
        },
        {
          title: 'Model nouns before endpoints',
          paragraphs: [
            'A resource-oriented API starts from nouns such as purchase-requests, products or users. Paths identify resources; HTTP methods describe the operation.',
            'Business workflows still need explicit actions sometimes. In those cases, keep the action scoped to a resource and make validation, authorization and error responses visible in the contract.',
          ],
          code: 'GET    /api/purchase-requests/42\nPOST   /api/purchase-requests\nPATCH  /api/purchase-requests/42\nPOST   /api/purchase-requests/42/submit',
        },
        {
          title: 'Java implementation habits',
          paragraphs: [
            'Keep transport DTOs separate from domain decisions, validate inputs at the boundary and return meaningful status codes. A controller should not become the place where every business rule lives.',
            'The goal is not to make every endpoint clever. It is to make success, validation failure and authorization failure predictable for the frontend and for future maintainers.',
          ],
        },
      ],
      takeaways: ['HTTP describes the exchange; REST guides resource modelling.', 'Good APIs make status and failure cases explicit.', 'Separate request mapping from business rules.'],
    },
    'docker-fundamentals': {
      intro: 'Containers make an application environment reproducible: the same runtime, dependencies and startup command can move between developer machines and deployment targets.',
      sections: [
        {
          title: 'Image, container and volume',
          paragraphs: [
            'An image is a packaged filesystem and startup instruction. A container is a running instance of that image. A volume is persistent storage that should outlive a container recreation.',
            'This distinction helps avoid a common mistake: treating a container as a server that should be manually changed. Configuration and dependencies belong in reproducible definitions instead.',
          ],
        },
        {
          title: 'A useful local development baseline',
          paragraphs: [
            'For a full-stack project, Compose can start the API, database and supporting services with one command. Environment variables should describe connection settings, while secrets stay outside the image and repository.',
          ],
          code: 'docker compose up --build\ndocker compose logs -f api\ndocker compose down',
        },
        {
          title: 'What Docker does not solve',
          paragraphs: [
            'Containers reduce environment drift; they do not replace application logs, database migrations, health checks or secure secret management. Treat Docker as one layer of delivery discipline, not the whole system.',
          ],
        },
      ],
      takeaways: ['Images are definitions; containers are running instances.', 'Compose makes multi-service local setup repeatable.', 'Reproducibility still needs migrations, health checks and secure configuration.'],
    },
    'git-basics': {
      intro: 'Git is a distributed version-control system for preserving change history, collaborating safely and recovering from mistakes. This guide consolidates essential daily commands and best practices for modern development workflows.',
      sections: [
        {
          title: '1. Three core areas & repository inspection',
          paragraphs: [
            'Git manages code across three distinct zones: the Working Directory (active local files), the Staging Area / Index (deliberate snapshot preparation), and the Repository (permanent committed history).',
            'Before making any changes, always inspect the state of your project. Using status and diff prevents accidentally committing unintended edits or debugging leftovers.',
          ],
          code: '# Initialize a new repository or clone an existing project\ngit init\ngit clone https://github.com/user/project.git\n\n# Check status of modified and untracked files in short format\ngit status -s\n\n# Inspect exact line-by-line differences before staging\ngit diff',
        },
        {
          title: '2. Staging & disciplined atomic commits',
          paragraphs: [
            'Avoid grouping unrelated changes into a single mega-commit. Staging allows you to craft atomic, focused commits where each commit represents one logical change or bugfix.',
            'Follow Conventional Commits format (feat:, fix:, refactor:, docs:, test:, chore:) with concise, imperative descriptions to keep team logs clean and readable.',
          ],
          code: '# Stage a specific file or all modified files\ngit add src/services/auth.ts\ngit add .\n\n# Commit with a clear, conventional message\ngit commit -m "feat(auth): implement JWT token refresh mechanism"\n\n# Amend recent commit with forgotten changes or updated message (unpushed)\ngit commit --amend -m "feat(auth): complete JWT authentication and token refresh"\n\n# View concise graphical commit history\ngit log --oneline --graph --decorate --all -n 10',
        },
        {
          title: '3. Branching, stashing & clean merging',
          paragraphs: [
            'Never commit directly to production or main branches. Create dedicated feature branches to isolate development, make code reviews easier, and allow safe rollback.',
            'When an urgent fix requires switching branches before your current task is done, use stash to park in-progress edits temporarily without creating half-baked commits.',
          ],
          code: '# Create and switch to a new feature branch\ngit switch -c feature/search-filter\n\n# Temporarily stash uncommitted changes to switch context\ngit stash\n# ... switch branches or pull updates ...\n# Restore stashed changes back to working tree\ngit stash pop\n\n# Switch back to main and merge feature branch\ngit switch main\ngit merge feature/search-filter\n\n# Safely delete merged branch\ngit branch -d feature/search-filter',
        },
        {
          title: '4. Remote collaboration & synchronization',
          paragraphs: [
            'Collaborating with teams requires synchronizing local branches with the remote origin. Understanding the difference between fetch (download metadata without altering local work) and pull (fetch + merge) prevents unexpected merge conflicts.',
          ],
          code: '# Verify connected remote repositories\ngit remote -v\n\n# Fetch latest remote changes without auto-merging\ngit fetch origin\n\n# Pull and merge remote updates into current branch\ngit pull origin main\n\n# Push local branch to remote and configure upstream tracking\ngit push -u origin feature/search-filter',
        },
        {
          title: '5. Safe undo & recovery decision tree',
          paragraphs: [
            'Mistakes happen in development. Before reaching for destructive commands, identify where the error is: in the working directory, in staging, committed locally, or already pushed to remote.',
            'For shared remote history, always create a new compensating commit using revert instead of rewriting history. Save soft resets for local adjustments before pushing.',
          ],
          code: '# 1. Discard uncommitted changes in working directory (clean file)\ngit restore src/app.ts\n\n# 2. Unstage a file without losing its modifications\ngit restore --staged src/app.ts\n\n# 3. Undo last local commit while keeping all changes staged\ngit reset --soft HEAD~1\n\n# 4. Safely invert a commit that was already pushed to remote\ngit revert <commit-hash>',
        },
      ],
      takeaways: [
        'Check git status frequently to maintain clear visibility across the 3 working areas.',
        'Create atomic, well-described commits with Conventional Commit conventions on isolated branches.',
        'Use git stash for quick context switches and rely on non-destructive commands like git revert and git restore for safe recovery.',
      ],
    },
  },
  vi: {
    'tcp-vs-udp': {
      intro: 'TCP và UDP giải quyết hai bài toán truyền dữ liệu khác nhau. Câu hỏi hữu ích không phải là giao thức nào "tốt hơn", mà là sản phẩm có thể chấp nhận kiểu lỗi nào.',
      sections: [
        { title: 'Kết nối và bảo đảm truyền tải', paragraphs: ['TCP thiết lập kết nối trước khi truyền dữ liệu. Số thứ tự, xác nhận và cơ chế truyền lại giúp bên nhận khôi phục một luồng byte có thứ tự.', 'UDP gửi các datagram độc lập. Overhead thấp hơn, nhưng khi cần độ tin cậy, thứ tự hay chống trùng lặp thì ứng dụng phải tự xử lý.'] },
        { title: 'Chọn theo trải nghiệm người dùng', paragraphs: ['Yêu cầu mua sắm, xác nhận thanh toán hay truyền tệp không thể âm thầm mất dữ liệu, nên TCP thường là nền tảng phù hợp. Chậm một chút vẫn tốt hơn sai trạng thái.', 'Với thoại, vị trí thời gian thực hoặc snapshot của game, gói tin cũ đôi khi còn tệ hơn gói tin mất. UDP phù hợp hơn khi trạng thái mới nhất là điều người dùng cần.'] },
        { title: 'Checklist thực tế', paragraphs: ['Bắt đầu bằng kết quả cần bảo đảm, rồi xác định nơi đặt trách nhiệm về độ tin cậy. Lựa chọn giao thức phải theo ngữ nghĩa dữ liệu, độ trễ chấp nhận được và cách phục hồi.'], code: 'Cần đủ mọi message, đúng thứ tự? -> TCP\nCần trạng thái mới nhất thật nhanh? -> cân nhắc UDP\nCần cả hai? -> thiết kế recovery layer rõ ràng' },
      ],
      takeaways: ['TCP đổi overhead lấy truyền tải tin cậy, đúng thứ tự.', 'UDP đổi bảo đảm lấy datagram độ trễ thấp hơn.', 'Kiểu lỗi của sản phẩm phải dẫn dắt quyết định giao thức.'],
    },
    'http-rest-java': {
      intro: 'HTTP là giao thức trao đổi message; REST là cách mô hình hóa resource trên giao thức đó. Tách hai ý này giúp API nhỏ dễ hiểu và dễ bảo trì hơn.',
      sections: [
        { title: 'Đọc request như một hợp đồng', paragraphs: ['Request gồm method, path, header và body. Response gồm status code, header và representation. Mỗi phần đều truyền đạt chính xác ý định và kết quả.', 'GET nên đọc mà không đổi state. POST thường tạo hoặc kích hoạt công việc. PUT và PATCH đều cập nhật nhưng có ngữ nghĩa thay thế khác nhau.'] },
        { title: 'Mô hình hóa danh từ trước endpoint', paragraphs: ['API hướng resource bắt đầu từ các danh từ như purchase-requests, products hoặc users. Path định danh resource, HTTP method mô tả thao tác.', 'Workflow nghiệp vụ đôi khi vẫn cần action rõ ràng. Khi đó hãy scope action theo resource, đồng thời thể hiện validation, authorization và error response trong contract.'], code: 'GET    /api/purchase-requests/42\nPOST   /api/purchase-requests\nPATCH  /api/purchase-requests/42\nPOST   /api/purchase-requests/42/submit' },
        { title: 'Thói quen triển khai Java', paragraphs: ['Tách DTO giao tiếp khỏi domain decision, validate input ở boundary và trả về status code có ý nghĩa. Controller không nên là nơi chứa mọi business rule.', 'Mục tiêu là để thành công, lỗi validation và lỗi quyền đều dự đoán được cho frontend lẫn người bảo trì sau này.'] },
      ],
      takeaways: ['HTTP mô tả trao đổi; REST định hướng mô hình resource.', 'API tốt làm rõ status và failure case.', 'Tách request mapping khỏi business rule.'],
    },
    'docker-fundamentals': {
      intro: 'Container giúp môi trường chạy có thể tái lập: runtime, dependency và startup command giống nhau giữa máy lập trình viên và nơi triển khai.',
      sections: [
        { title: 'Image, container và volume', paragraphs: ['Image là filesystem đã đóng gói kèm chỉ dẫn khởi động. Container là một instance đang chạy của image. Volume là storage bền vững, cần tồn tại sau khi container được tạo lại.', 'Phân biệt này tránh lỗi phổ biến là xem container như server để sửa tay. Cấu hình và dependency nên nằm trong định nghĩa có thể tái lập.'] },
        { title: 'Nền tảng cho local development', paragraphs: ['Với dự án full-stack, Compose có thể khởi động API, database và service hỗ trợ bằng một lệnh. Environment variable mô tả kết nối, còn secret nên nằm ngoài image và repository.'], code: 'docker compose up --build\ndocker compose logs -f api\ndocker compose down' },
        { title: 'Những gì Docker không giải quyết', paragraphs: ['Container giảm môi trường bị lệch; không thay thế log ứng dụng, migration database, health check hay quản lý secret an toàn. Hãy xem Docker là một lớp của delivery discipline.'] },
      ],
      takeaways: ['Image là định nghĩa; container là instance đang chạy.', 'Compose giúp local multi-service setup tái lập.', 'Tái lập vẫn cần migration, health check và cấu hình an toàn.'],
    },
    'git-basics': {
      intro: 'Git là hệ thống quản lý phiên bản phân tán, giúp lưu lịch sử thay đổi, cộng tác an toàn và khôi phục khi xảy ra lỗi. Ghi chú này tổng hợp các câu lệnh thông dụng cùng phương pháp thực hành hiệu quả trong phát triển phần mềm.',
      sections: [
        {
          title: '1. Ba không gian làm việc cốt lõi & Khởi tạo',
          paragraphs: [
            'Git quản lý mã nguồn qua ba khu vực: Working Directory (thư mục chứa file đang chỉnh sửa thực tế), Staging Area / Index (khu vực chuẩn bị snapshot cho commit), và Repository (lịch sử commit đã lưu trữ chính thức).',
            'Trước và sau mỗi thao tác, hãy luôn dùng git status và git diff để kiểm tra chính xác trạng thái và tránh commit nhầm các file tạm hoặc debug.',
          ],
          code: '# Khởi tạo repository mới hoặc nhân bản từ GitHub/GitLab\ngit init\ngit clone https://github.com/user/project.git\n\n# Kiểm tra trạng thái các file (untracked, modified, staged) dạng rút gọn\ngit status -s\n\n# So sánh chi tiết từng dòng code thay đổi trước khi đưa vào staging\ngit diff',
        },
        {
          title: '2. Staging & Commit nguyên tử có kỷ luật',
          paragraphs: [
            'Không nên gộp mọi thay đổi không liên quan vào một commit khổng lồ. Staging Area cho phép bạn gom các thay đổi thuộc cùng một ý định thành một commit nguyên tử (atomic commit).',
            'Áp dụng quy chuẩn Conventional Commits (feat:, fix:, refactor:, docs:, test:, chore:) với câu mô tả ngắn gọn, rõ ràng ở thể mệnh lệnh.',
          ],
          code: '# Đưa file cụ thể hoặc toàn bộ thư mục vào Staging\ngit add src/services/auth.ts\ngit add .\n\n# Tạo commit với thông điệp rõ ràng theo chuẩn Conventional Commits\ngit commit -m "feat(auth): thêm cơ chế xác thực JWT và refresh token"\n\n# Bổ sung file sót hoặc chỉnh sửa thông điệp của commit gần nhất (chưa push)\ngit commit --amend -m "feat(auth): hoàn thiện xác thực JWT và refresh token"\n\n# Xem lịch sử commit dạng cây trực quan, rút gọn 1 dòng\ngit log --oneline --graph --decorate --all -n 10',
        },
        {
          title: '3. Phân nhánh, cất giữ tạm thời & Hợp nhất nhánh',
          paragraphs: [
            'Tuyệt đối không code trực tiếp trên nhánh chính (main/master). Tạo các nhánh tính năng (feature/) để cô lập rủi ro, giúp việc code review và rollback dễ dàng hơn.',
            'Khi đang code dở mà cần chuyển nhánh gấp để fix bug, hãy dùng git stash để cất giữ thay đổi tạm thời mà không cần tạo commit rác.',
          ],
          code: '# Tạo và chuyển ngay sang nhánh tính năng mới\ngit switch -c feature/search-filter\n\n# Cất giữ tạm thời code đang làm dở để chuyển nhánh khẩn cấp\ngit stash\n# ... chuyển nhánh khác hoặc pull code mới ...\n# Lấy lại code đã cất giữ và xóa khỏi danh sách stash\ngit stash pop\n\n# Chuyển về nhánh main và hợp nhất code từ nhánh tính năng\ngit switch main\ngit merge feature/search-filter\n\n# Xóa nhánh an toàn sau khi đã merge thành công\ngit branch -d feature/search-filter',
        },
        {
          title: '4. Làm việc với Remote & Đồng bộ hóa',
          paragraphs: [
            'Làm việc nhóm đòi hỏi đồng bộ liên tục với remote repository. Cần phân biệt rõ giữa fetch (tải metadata và nhánh mới từ remote về máy mà không tự gộp) và pull (fetch + merge thẳng vào nhánh hiện tại).',
          ],
          code: '# Xem danh sách và URL của các remote repository\ngit remote -v\n\n# Lấy dữ liệu mới nhất từ remote về nhưng chưa tự động merge\ngit fetch origin\n\n# Kéo và hợp nhất code mới từ remote về nhánh hiện tại\ngit pull origin main\n\n# Đẩy nhánh local lên remote lần đầu và thiết lập upstream tracking\ngit push -u origin feature/search-filter',
        },
        {
          title: '5. Chiến lược hoàn tác an toàn khi gặp sự cố',
          paragraphs: [
            'Khi gặp lỗi, hãy bình tĩnh xác định vị trí của thay đổi: chưa stage, đã stage, đã commit local, hay đã push lên remote. Tránh lạm dụng các lệnh phá hủy như reset --hard.',
            'Đối với commit đã chia sẻ lên remote của cả nhóm, luôn dùng git revert để tạo commit đảo ngược an toàn thay vì ghi đè lịch sử.',
          ],
          code: '# 1. Hủy thay đổi của file trong Working Directory (chưa stage)\ngit restore src/app.ts\n\n# 2. Đưa file từ Staging trở lại Working Directory (unstage)\ngit restore --staged src/app.ts\n\n# 3. Hủy commit gần nhất nhưng GIỮ NGUYÊN toàn bộ code ở Staging để sửa lại\ngit reset --soft HEAD~1\n\n# 4. Tạo commit đảo ngược an toàn cho commit ĐÃ PUSH lên remote\ngit revert <commit-hash>',
        },
      ],
      takeaways: [
        'Luôn kiểm tra git status thường xuyên để nắm rõ trạng thái trên 3 khu vực làm việc.',
        'Tạo commit nhỏ, có mục đích rõ ràng theo chuẩn Conventional Commits trên từng nhánh tính năng riêng biệt.',
        'Dùng git stash khi cần chuyển đổi ngữ cảnh nhanh và ưu tiên git revert, git restore thay vì các lệnh phá hủy.',
      ],
    },
  },
};
