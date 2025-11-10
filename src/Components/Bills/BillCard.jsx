import { Link } from "react-router-dom";

export default function BillCard({ bill }) {
  return (
    <div className="card card-equal bg-base-100 shadow-xl">
      <figure>
        <img
          src={bill.image}
          alt={bill.title}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bill.title}</h2>
        <p>
          <strong>Category:</strong> {bill.category}
        </p>
        <p>
          <strong>Location:</strong> {bill.location}
        </p>
        <p>
          <strong>Amount:</strong> ৳{bill.amount}
        </p>
        <div className="card-actions justify-end mt-4">
          <Link to={`/bill/${bill._id}`} className="btn btn-primary btn-sm">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}
