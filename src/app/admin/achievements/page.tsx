import { addAchievement, updateAchievement, deleteAchievement } from "../../../actions/achievements";

export default function AchievementsPage() {
  return (
    <div>
      <form action={addAchievement}>
        {/* form fields */}
        <button type="submit">Add Achievement</button>
      </form>
    </div>
  );
}
