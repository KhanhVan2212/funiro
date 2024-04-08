import mongoose, { Schema } from "mongoose";
import slug from "mongoose-slug-updater";
mongoose.plugin(slug);
const categorySchema = new Schema(
    {
        name: {
            type: String,
        },
        slug: {
            type: String,
            slug: "name",
            unique: true,
        }
    },
    { timestamps: true, versionKey: false }
);
export default mongoose.model("Category", categorySchema);
