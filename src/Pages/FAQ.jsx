export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <title>FAQ</title>
      <h1 className="text-4xl font-bold text-center mb-10">FAQ</h1>
      <div className="space-y-6">
        <details className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <summary className="collapse-title">
            Can I pay past month bills?
          </summary>
          <div className="collapse-content">
            <p>
              No. Only current month bills can be paid for security and policy
              reasons.
            </p>
          </div>
        </details>
        <details className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <summary className="collapse-title">
            How to download payment history?
          </summary>
          <div className="collapse-content">
            <p>Go to "My Pay Bills" → Click "Download PDF Report"</p>
          </div>
        </details>
      </div>
    </div>
  );
}
