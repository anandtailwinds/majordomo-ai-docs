# ModelProfileScope

This describes the list of permitted model profiles for the user along with the embedding and llm models list.

## Properties

| Name                 | Type          | Description                                      | Notes      |
| -------------------- | ------------- | ------------------------------------------------ | ---------- |
| **name**             | **str**       | Name of the model profile.                       |            |
| **embedding_models** | **List[str]** | List of embedding models available for the user. | [optional] |
| **llm_models**       | **List[str]** | List of LLM models available for the user.       | [optional] |

## Example

```python
from majordomo_ai.models.model_profile_scope import ModelProfileScope

# TODO update the JSON string below
json = "{}"
# create an instance of ModelProfileScope from a JSON string
model_profile_scope_instance = ModelProfileScope.from_json(json)
# print the JSON string representation of the object
print(ModelProfileScope.to_json())

# convert the object into a dict
model_profile_scope_dict = model_profile_scope_instance.to_dict()
# create an instance of ModelProfileScope from a dict
model_profile_scope_from_dict = ModelProfileScope.from_dict(model_profile_scope_dict)
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
