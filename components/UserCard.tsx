import { User } from "@/types/user";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h2 className="font-medium">{user.name}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
    </div>
  );
}
