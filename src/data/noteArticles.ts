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
      intro: 'Git is a distributed version-control system for preserving change history, collaborating safely and recovering from mistakes. This note condenses the workflow from my original MLBlog article.',
      sections: [
        {
          title: 'Three places to understand first',
          paragraphs: [
            'Your working directory contains files you are editing. The staging area is a deliberate selection of changes for the next snapshot. A commit records that snapshot in repository history.',
            'That middle stage is valuable: it lets one focused commit contain only the changes that belong together, even when several files are in progress.',
          ],
          code: 'git status\ngit add src/feature.ts\ngit commit -m "feat: add request validation"\ngit log --oneline',
        },
        {
          title: 'Work in branches, not on hope',
          paragraphs: [
            'A branch isolates a feature or fix from the main line. It makes review and rollback easier because the intention is visible in both the branch name and the commit history.',
            'When integrating, first understand the target branch and any conflicts. A clean merge is a result of small, focused changes more than a command to memorize.',
          ],
          code: 'git switch -c feature/request-search\n# make focused commits\ngit switch main\ngit merge feature/request-search',
        },
        {
          title: 'Undo deliberately',
          paragraphs: [
            'Before using a destructive command, ask where the change currently lives: unstaged, staged, committed locally or already shared. The correct recovery action depends on that answer.',
            'For shared history, prefer a new corrective commit or revert. Commands such as reset --hard can discard work permanently and should never be the first reflex.',
          ],
        },
      ],
      takeaways: ['Use status frequently to know where each change is.', 'Create small, clear commits on focused branches.', 'Choose undo commands from the state of the change, not from panic.'],
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
      intro: 'Git là hệ thống quản lý phiên bản phân tán, giúp lưu lịch sử thay đổi, cộng tác an toàn và khôi phục khi xảy ra lỗi. Ghi chú này cô đọng từ bài viết gốc trên MLBlog của mình.',
      sections: [
        { title: 'Ba nơi cần hiểu trước', paragraphs: ['Working directory chứa file đang chỉnh sửa. Staging area là phần thay đổi được chủ động chọn cho snapshot kế tiếp. Commit ghi lại snapshot đó vào lịch sử repository.', 'Staging area có giá trị vì một commit tập trung chỉ chứa các thay đổi thuộc cùng một ý định, ngay cả khi bạn đang làm nhiều file.'], code: 'git status\ngit add src/feature.ts\ngit commit -m "feat: add request validation"\ngit log --oneline' },
        { title: 'Làm việc trên branch, không làm việc bằng hy vọng', paragraphs: ['Branch cô lập feature hoặc fix khỏi main line. Nó giúp review và rollback dễ hơn vì ý định thể hiện cả ở tên branch lẫn lịch sử commit.', 'Khi tích hợp, hãy hiểu target branch và conflict trước. Merge sạch là kết quả của thay đổi nhỏ, tập trung, không chỉ là một lệnh cần nhớ.'], code: 'git switch -c feature/request-search\n# make focused commits\ngit switch main\ngit merge feature/request-search' },
        { title: 'Undo có chủ đích', paragraphs: ['Trước lệnh có tính phá hủy, hãy hỏi thay đổi đang ở đâu: chưa stage, đã stage, đã commit local hay đã chia sẻ. Cách khôi phục đúng phụ thuộc vào câu trả lời.', 'Với lịch sử đã chia sẻ, ưu tiên commit sửa hoặc revert. reset --hard có thể làm mất vĩnh viễn thay đổi và không nên là phản xạ đầu tiên.'] },
      ],
      takeaways: ['Dùng status thường xuyên để biết mỗi thay đổi đang ở đâu.', 'Tạo commit nhỏ, rõ ràng trên branch tập trung.', 'Chọn lệnh undo theo trạng thái thay đổi, không theo hoảng hốt.'],
    },
  },
};
