module API
	module V1
		class Posts < Grape::API
			include API::V1::Defaults

			resource :posts do
				desc "Return all posts"
				get "", root: :posts do
					Post.all
				end

				desc "Return a post"
				params do
					requires :id, type: String, desc: "ID of the post"
				end
				get ":id", root: "post" do
					Post.friendly.find(permitted_params[:id])
				end
			end
		end
	end
end